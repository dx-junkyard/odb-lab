from interpreter import interpreter

interpreter.auto_run = True
interpreter_chat_display = False


def set_interpreter_api_key(
    api_key: str,
):
    interpreter.llm.api_key = api_key


def chat_interpreter(
    message: str,
) -> str:
    return "\n".join(
        map(
            lambda x: x["content"],
            interpreter.chat(message, display=interpreter_chat_display),
        )
    )
