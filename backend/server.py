from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from router import health_check_router
from router import interpreter_router
import uvicorn

app = FastAPI()

# CORS localhostのみ許可
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(interpreter_router.router)
app.include_router(health_check_router.router)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=58912)
