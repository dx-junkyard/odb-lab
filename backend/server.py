from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from router import interpreter_router

app = FastAPI()

app.include_router(interpreter_router.router)
