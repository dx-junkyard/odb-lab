from typing import Annotated

from fastapi import APIRouter, HTTPException, Form
from fastapi.responses import StreamingResponse
from config.logging import logger
from service.interpreter_service import chat_interpreter, set_interpreter_api_key


router = APIRouter(prefix="/api/interpreter")


@router.post("/api-key")
def set_api_key(
    api_key: Annotated[str, Form()],
):
    set_interpreter_api_key(api_key)
    return {
        "message": "API key set successfully",
    }


@router.post("/chat")
def chat(
    message: Annotated[str, Form()],
):
    try:
        return StreamingResponse(
            chat_interpreter(message), media_type="text/event-stream"
        )
    except Exception as e:
        logger.error(e)
        raise HTTPException(status_code=500)
