from app.models.config import SessionLocal
from controllers.cow_controller import add_cow


# initialize_db()
SessionLocal1 = SessionLocal()

def add_cow_record(name,breed,date,tag):
    add_cow(name,breed,date,tag)