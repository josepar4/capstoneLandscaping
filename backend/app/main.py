from fastapi import FastAPI
from sqlalchemy import text

from app.database import engine

app = FastAPI()


@app.get("/api/health")
def health():
    with engine.connect() as conn:
        version = conn.execute(text("SELECT version()")).scalar()
    return {"status": "ok", "database": version}
