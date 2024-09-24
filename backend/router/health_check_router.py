from typing import Annotated

from fastapi import APIRouter, HTTPException, Form
from fastapi.responses import StreamingResponse
from config.logging import logger
from service.interpreter_service import chat_interpreter, set_interpreter_api_key


router = APIRouter(prefix="/api/health")


@router.get("/")
def health():
    return {
        "status": "ok",
    }
