from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from router import interpreter_router
import uvicorn

app = FastAPI()

app.include_router(interpreter_router.router)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=58912)
