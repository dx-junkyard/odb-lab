from interpreter import interpreter
import json

interpreter.auto_run = True
interpreter_chat_display = False


def set_interpreter_api_key(
    api_key: str,
):
    interpreter.llm.api_key = api_key


def chat_interpreter(message: str):
    for result in interpreter.chat(message, stream=True, display=False):
        result_json = json.dumps(result, ensure_ascii=False)
        yield f"data: {result_json}\n\n"
