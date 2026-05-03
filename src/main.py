import asyncio
from audio_input import capture_audio
from stt import speech_to_text
from llm import process_text
from tts import text_to_speech
from audio_output import play_audio

async def voice_loop():
    print("Voice Agent iniciado...\n")

    while True:
        audio = await capture_audio()
        text = await speech_to_text(audio)

        if not text:
            continue

        print("Usuario:", text)

        response = await process_text(text)
        print("Asistente:", response)

        audio_response = await text_to_speech(response)
        await play_audio(audio_response)
if __name__ == "__main__":
    try:
        asyncio.run(voice_loop())
    except KeyboardInterrupt:
        print("\nPrograma detenido.")