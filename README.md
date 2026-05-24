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
│── handoffs.md
│── architecture-checkpoint.md
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
- Gestión autónoma de issues  
- Control arquitectónico intermedio  
- Gestión de contexto mediante handoffs  

---

## 🔁 Flujo de Trabajo Ralph Loop

Este proyecto continúa su desarrollo utilizando un flujo de trabajo autónomo asistido por IA inspirado en Ralph Loops y Claude Code.

---

## ⚙️ Ciclo de desarrollo

1. Creación de issues en GitHub  
2. Ejecución de iteraciones autónomas  
3. Revisión humana de QA  
4. Generación de handoffs de contexto  
5. Ejecución de checkpoints arquitectónicos  
6. Continuación del siguiente ciclo de desarrollo  

---

## ▶️ Ejecución del flujo autónomo

Ejecutar desde la terminal:

```bash
./ralph/once.sh <ID_DEL_ISSUE>
```

---

## 🧪 QA en la frontera (Human QA)

Después de cada ejecución autónoma:

- Se revisan los commits generados  
- Se inspecciona manualmente la arquitectura  
- Se ejecutan pruebas locales  
- Se validan dependencias y acoplamientos  
- Se documentan riesgos técnicos  

---

## 🧠 Gestión de contexto (Handoff)

El proyecto implementa resúmenes compactos de transferencia para evitar degradación de contexto en sesiones largas con IA.

### Archivo utilizado

```text
handoffs.md
```

### Este documento registra

- Componentes completados  
- Decisiones arquitectónicas  
- Riesgos detectados  
- Próximos pasos del sprint  

---

## 🏗️ Control arquitectónico intermedio

Se realizó una revisión arquitectónica utilizando el flujo:

```text
/improve-codebase-architecture
```

### Resultados documentados en

```text
architecture-checkpoint.md
```

### La revisión permitió

- Detectar acoplamientos innecesarios  
- Identificar oportunidades de modularización  
- Proponer nuevas abstracciones async  
- Evaluar soluciones multi-agente en paralelo  

---

## 📌 Issues y dependencias

El proyecto organiza el trabajo mediante GitHub Issues utilizando relaciones:

```text
Blocked by
```

### Esto permite coordinar

- Dependencias técnicas  
- Ejecución secuencial  
- Desarrollo paralelo  
- Liberación progresiva de funcionalidades  

---

## 🚀 Estado del proyecto

Versión funcional inicial con simulación completa del sistema y flujo de trabajo autónomo documentado.

### Próximas mejoras

- Integración de audio real  
- Implementación de STT real  
- Integración con un modelo LLM  
- Implementación de TTS real  
- Desarrollo de interfaz web (frontend)  
- Streaming de respuestas  
- Manejo avanzado de memoria conversacional  

---

## 🛠️ Tecnologías utilizadas

- Python  
- asyncio  
- Git  
- GitHub Issues  
- Claude Code  
- Ralph Loops  