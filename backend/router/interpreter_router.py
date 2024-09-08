from typing import Annotated

from fastapi import APIRouter, HTTPException, Form
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

    chat_response = chat_interpreter(message)

    try:
        return {"message": chat_response}
    except Exception as e:
        logger.error(f"Error in chat_endpoint: {e}")
        raise HTTPException(status_code=500)
