
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from llm_handler import get_form_data_from_voice

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.post("/api/fill-form")
async def fill_form(req: Request):
    data = await req.json()
    transcript = data.get("transcript")
    form_fields = data.get("fields")
    filled_data = get_form_data_from_voice(transcript, form_fields)
    return {"filled_data": filled_data}
