# 🏗️ Sección 2: Anatomía de la Complejidad

## Introducción

Para evaluar la calidad del software desarrollado se utilizaron los conceptos propuestos por John Ousterhout en el libro:

*A Philosophy of Software Design*

El análisis se centró en tres conceptos fundamentales:

* Deep Modules
* Shallow Modules
* Information Leakage

---

# Deep Modules (Módulos Profundos)

Los módulos profundos son aquellos que ofrecen una interfaz simple mientras ocultan una cantidad significativa de complejidad interna.

Dentro del proyecto Voice Agent se identificaron los siguientes módulos profundos.

## Módulo Speech-to-Text (stt.py)

Responsabilidad:

* Recibir audio
* Procesar entrada de voz
* Retornar texto

Interfaz:

```python
await speech_to_text(audio)
```

La complejidad del reconocimiento de voz permanece encapsulada.

---

## Módulo Text-to-Speech (tts.py)

Responsabilidad:

* Recibir texto
* Generar salida de audio

Interfaz:

```python
await text_to_speech(text)
```

Los detalles de síntesis de voz permanecen ocultos para el resto del sistema.

---

## Módulo LLM (llm.py)

Responsabilidad:

* Procesar lenguaje natural
* Generar respuestas

Interfaz:

```python
await process_text(text)
```

La lógica interna puede evolucionar sin afectar otras capas.

---

# Shallow Modules (Módulos Superficiales)

Durante el desarrollo se identificaron componentes con poca funcionalidad en comparación con la estructura que introducen.

Ejemplos:

* audio_input.py
* audio_output.py

Estos módulos son funcionales, pero podrían agruparse en futuras versiones para aumentar la profundidad funcional y reducir complejidad accidental.

---

# Information Leakage (Fuga de Información)

La fuga de información ocurre cuando detalles internos de implementación se propagan hacia otras capas.

## Riesgos Detectados

* Dependencia de proveedores STT
* Dependencia de proveedores TTS
* Dependencia de motores LLM

---

## Estrategia Aplicada

Se utilizaron interfaces simples:

```python
await speech_to_text(audio)

await process_text(text)

await text_to_speech(text)
```

Las capas superiores no necesitan conocer cómo funcionan internamente estos servicios.

---

# Relación con A Philosophy of Software Design

Según John Ousterhout, un sistema bien diseñado reduce la complejidad visible para los desarrolladores y concentra la complejidad necesaria detrás de interfaces simples.

Durante el desarrollo de Voice Agent se buscó aplicar este principio mediante la separación clara de responsabilidades entre los módulos STT, LLM y TTS.

La arquitectura obtenida permite modificar tecnologías internas sin afectar las capas superiores del sistema, constituyendo una aplicación directa del ocultamiento de información y de los Deep Modules.

---

# Resultado

La arquitectura mantiene una separación clara de responsabilidades.

Los módulos principales ocultan su complejidad interna y minimizan la fuga de información, facilitando futuras modificaciones y extensiones del sistema.
