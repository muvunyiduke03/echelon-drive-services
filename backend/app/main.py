from fastapi import FastAPI

app = FastAPI(
  title="Echelon Drive Services API",
  version="1.0.0",
)

@app.get("/")
def root() -> dict[str, str]:
  return {
    "message": "Welcome to Echelon Drive Services API"
  }

@app.get("/health")
def health_check() -> dict[str, str]:
  return {
    "status": "healthy"
  }