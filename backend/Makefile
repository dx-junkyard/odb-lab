.PHONY: build

dev:
	poetry run uvicorn server:app --reload --port 58912

build:
	poetry run pyinstaller server.spec
