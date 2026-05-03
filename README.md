# 🎙️ Voice Agent

## 📌 Descripción
Voice Agent es un asistente conversacional por voz desarrollado en Python usando asyncio. Simula el flujo de un sistema en tiempo real:

Micrófono → Speech-to-Text → LLM → Text-to-Speech → Altavoz

---

## 🎯 Objetivo académico
Comprender la arquitectura de agentes de voz y sistemas en tiempo real sin depender de frameworks complejos.

---

## ⚙️ Flujo del sistema

1. Captura de audio (simulada)  
2. Conversión de audio a texto (STT)  
3. Procesamiento con modelo de lenguaje (LLM)  
4. Generación de respuesta  
5. Conversión de texto a audio (TTS)  
6. Reproducción de audio  

---

## ▶️ Ejecución del proyecto

Ejecutar desde la terminal:

```bash
py src/main.py
```

---

## 📂 Estructura del proyecto

```text
voice-agent/
│── README.md
│── ClientBrief.md
│── requirements.txt
│── src/
│   ├── main.py
│   ├── audio_input.py
│   ├── stt.py
│   ├── llm.py
│   ├── tts.py
│   └── audio_output.py
│── tests/
│   └── test_basic.py
```

---

## 🧠 Flujo de trabajo

El desarrollo se realizó de forma iterativa, dividiendo el proyecto en tareas (issues) y construyendo una versión funcional inicial.

Se trabajó en:

- Definición del problema (Client Brief)  
- Creación de estructura base  
- Implementación del loop asíncrono  
- Simulación del flujo completo  

---

## 🚀 Estado del proyecto

Versión inicial funcional con simulación completa del sistema.

### Próximas mejoras:

- Integración de audio real  
- Implementación de STT real  
- Integración con un modelo LLM  
- Implementación de TTS real  
- Desarrollo de interfaz web (frontend)  

---

## 🛠️ Tecnologías utilizadas

- Python  
- asyncio  
