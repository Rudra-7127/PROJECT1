from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, validator
from supabase import create_client, Client
from dotenv import load_dotenv
import os
import re
 
load_dotenv()
 
# ── Supabase client ────────────────────────────────────────────────────────────
SUPABASE_URL: str = os.environ["SUPABASE_URL"]
SUPABASE_KEY: str = os.environ["SUPABASE_SERVICE_KEY"]   # use service role key (not anon)
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
 
# ── App ────────────────────────────────────────────────────────────────────────
app = FastAPI(title="Chalo Khava Reservations API")
 
# Allow your Vercel frontend to call this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://project-1-red-sigma.vercel.app",
        "http://localhost:3000",   # for local dev
        "http://localhost:5173",   # for Vite dev
    ],
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)
 
# ── Request schema ─────────────────────────────────────────────────────────────
VALID_TIMES = [
    "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM",
    "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM",
    "06:00 PM", "06:30 PM",
    "07:00 PM", "07:30 PM",
    "08:00 PM", "08:30 PM",
    "09:00 PM", "09:30 PM",
    "10:00 PM", "10:30 PM",
]
 
class ReservationRequest(BaseModel):
    name:        str
    phone:       str
    date:        str          # format: YYYY-MM-DD
    time:        str          # e.g. "07:00 PM"
    guests:      int
    special_req: str = ""     # optional
 
    @validator("name")
    def name_not_empty(cls, v):
        v = v.strip()
        if not v:
            raise ValueError("Name cannot be empty")
        if len(v) < 2:
            raise ValueError("Name must be at least 2 characters")
        return v
 
    @validator("phone")
    def phone_valid(cls, v):
        digits = re.sub(r"[\s\-\+]", "", v)
        if not digits.isdigit() or len(digits) < 10:
            raise ValueError("Enter a valid phone number (min 10 digits)")
        return v
 
    @validator("date")
    def date_valid(cls, v):
        from datetime import date, datetime
        try:
            d = datetime.strptime(v, "%Y-%m-%d").date()
        except ValueError:
            raise ValueError("Date must be in YYYY-MM-DD format")
        if d < date.today():
            raise ValueError("Reservation date cannot be in the past")
        return v
 
    @validator("time")
    def time_valid(cls, v):
        if v not in VALID_TIMES:
            raise ValueError(f"Invalid time slot. Choose from: {', '.join(VALID_TIMES)}")
        return v
 
    @validator("guests")
    def guests_valid(cls, v):
        if v < 1 or v > 20:
            raise ValueError("Guests must be between 1 and 20")
        return v
 
 
class ReservationResponse(BaseModel):
    success: bool
    message: str
    reservation_id: int | None = None
 
 
# ── Routes ─────────────────────────────────────────────────────────────────────
 
@app.get("/")
def root():
    return {"status": "Chalo Khava API is running 🍽️"}
 
 
@app.get("/health")
def health():
    return {"status": "ok"}
 
 
@app.post("/reserve", response_model=ReservationResponse)
def make_reservation(req: ReservationRequest):
    """
    Accept a table reservation and store it in Supabase.
    """
    data = {
        "name":        req.name,
        "phone":       req.phone,
        "date":        req.date,
        "time":        req.time,
        "guests":      req.guests,
        "special_req": req.special_req.strip(),
    }
 
    try:
        result = supabase.table("reservations").insert(data).execute()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")
 
    if not result.data:
        raise HTTPException(status_code=500, detail="Failed to save reservation")
 
    reservation_id = result.data[0]["id"]
 
    return ReservationResponse(
        success=True,
        message=f"Table reserved! We'll see you on {req.date} at {req.time}. 🎉",
        reservation_id=reservation_id,
    )
 
 
@app.get("/reservations")
def list_reservations(date: str | None = None):
    """
    Admin endpoint — list all reservations (optionally filter by date).
    Protect this route with an API key in production!
    """
    query = supabase.table("reservations").select("*").order("date").order("time")
    if date:
        query = query.eq("date", date)
 
    try:
        result = query.execute()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
 
    return {"reservations": result.data, "count": len(result.data)}
 
