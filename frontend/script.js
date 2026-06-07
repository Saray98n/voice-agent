const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

let recognition;
let userName = "";
let lastTopic = "";

if (SpeechRecognition) {

    recognition = new SpeechRecognition();

    recognition.lang = "es-ES";
    recognition.continuous = false;
    recognition.interimResults = false;
}

function sendMessage(textoManual = null) {

    const input = document.getElementById("userInput");
    const chat = document.getElementById("chatContainer");

    const text =
        textoManual ||
        input.value.trim();

    if (!text) return;

    const userMessage =
        document.createElement("div");

    userMessage.className = "message user";
    userMessage.textContent = text;

    chat.appendChild(userMessage);

    input.value = "";

    setTimeout(() => {

        let respuesta;

        const pregunta =
            text.toLowerCase();

        if (pregunta.includes("me llamo")) {

            userName =
                text.replace(/me llamo/i, "").trim();

            respuesta =
                `Mucho gusto ${userName}. Recordaré tu nombre durante esta conversación.`;

        }

        else if (
            pregunta.includes("como me llamo")
        ) {

            respuesta =
                userName
                ? `Tu nombre es ${userName}.`
                : "Todavía no me has dicho tu nombre.";

        }

        else if (
            pregunta.includes("hola")
        ) {

            respuesta =
                `Hola ${userName || ""}. ¿Cómo estás hoy?`;

        }

        else if (
            pregunta.includes("como estas")
        ) {

            respuesta =
                "Estoy funcionando correctamente y listo para ayudarte.";

        }

        else if (
            pregunta.includes("que puedes hacer")
        ) {

            lastTopic = "capacidades";

            respuesta =
                "Puedo reconocer voz, responder preguntas y leer respuestas mediante síntesis de voz.";

        }

        else if (
            pregunta.includes("dime mas")
        ) {

            if (
                lastTopic === "capacidades"
            ) {

                respuesta =
                    "Además puedo recordar información básica de la conversación y responder mediante voz.";

            } else {

                respuesta =
                    "¿Sobre qué tema quieres saber más?";

            }

        }

        else if (
            pregunta.includes("proyecto")
        ) {

            lastTopic = "proyecto";

            respuesta =
                "Este proyecto implementa el flujo Micrófono → STT → LLM → TTS.";

        }

        else if (
            pregunta.includes("adios")
        ) {

            respuesta =
                "Hasta luego. Gracias por utilizar Voice Agent.";

        }

        else {

            respuesta =
                `Entiendo que dijiste: "${text}". ¿Quieres que profundicemos en ese tema?`;

        }

        const assistantMessage =
            document.createElement("div");

        assistantMessage.className =
            "message assistant";

        assistantMessage.textContent =
            respuesta;

        chat.appendChild(assistantMessage);

        speechSynthesis.cancel();

        const speech =
            new SpeechSynthesisUtterance(
                respuesta
            );

        speech.lang = "es-ES";

        speechSynthesis.speak(speech);

        chat.scrollTop =
            chat.scrollHeight;

    }, 600);
}

function startVoice() {

    if (!recognition) {

        alert(
            "Tu navegador no soporta reconocimiento de voz."
        );

        return;
    }

    recognition.start();

    recognition.onresult = function(event) {

        const texto =
            event.results[0][0].transcript;

        sendMessage(texto);
    };
}

document
.getElementById("userInput")
.addEventListener("keypress", function(event){

    if(event.key === "Enter") {
        sendMessage();
    }

});