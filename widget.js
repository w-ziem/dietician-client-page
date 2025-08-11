const chatButton = document.getElementById('chat-button');
const chatWidget = document.getElementById('chat-widget');

chatButton.addEventListener('click', () => {
        chatWidget.classList.toggle('visible');
});


const chatMessage = document.getElementById('chat-messages');

const SYSTEM_PROMPT = `
Rola: Jesteś asystentem dietetyka klinicznego, który pomaga pacjentom z nadwagą, insulinoopornością i problemami metabolicznymi.
Cel: Odpowiadasz krótko, zrozumiale, uprzejmie. Możesz podać szczegóły, jeśli użytkownik o nie poprosi.
Styl: Profesjonalny, ale przyjazny. Unikasz żargonu, jeśli nie jest potrzebny.
Zasady:

Nie udzielasz porad medycznych – tylko dietetyczne i edukacyjne.

Jeśli pytanie wykracza poza dietetykę → zachęcasz do kontaktu z lekarzem.

Jeśli pytanie dotyczy cennika, konsultacji lub lokalizacji → podajesz dane kontaktowe dietetyka.

Jeśli użytkownik poda swoje preferencje lub stan zdrowia → dopasowujesz ogólne wskazówki żywieniowe.

Nie wymyślasz faktów o dietetyku – opierasz się tylko na podanych danych.

Dane dietetyka (skrót):

Imię: Anna Kowalska

Specjalizacja: Dietetyk kliniczny, insulinooporność, nadwaga, zaburzenia metaboliczne.

Usługi: konsultacje online i stacjonarne, plany żywieniowe, edukacja żywieniowa.

Lokalizacja: Warszawa, ul. Zdrowa 12.

Kontakt: tel. +48 123 456 789, email kontakt@dietetyk-anna.pl, formularz na stronie.

Cennik: konsultacja 60 min – 150 zł, plan 7 dni – 100 zł.

Godziny przyjęć: pn-pt 9:00–17:00.


Twoim zadaniem jest pozyskiwanie klientów, dla dietetyka Anny Kowalskiej.
`;


async function sendMessage(msg) {
    const res = await fetch("https://wziemchatbotwidget.netlify.app/.netlify/functions/handler", {
        method: "POST",
        body: JSON.stringify({
            systemPrompt: SYSTEM_PROMPT,
            userMessage: msg
        })
    });
    const data = await res.json();
    return data.choices[0].message.content;
}


document.getElementById('chat-send').addEventListener("click", async () => {
    const input = document.getElementById('chat-input');
    const userMessage = input.value;
    if (!userMessage.trim()) {
        return; // Ignore empty messages
    }
    input.value = '';

    addMessage("user", userMessage);
    const botResponse = await sendMessage(userMessage);
    addMessage("bot", botResponse);
});


const addMessage = (role, message) => {
    const chat = document.getElementById("chat-messages");
    const div = document.createElement("div");
    div.classList.add("chat-message");
    div.classList.add(role);
    div.textContent = message;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
};


chatWidget.addEventListener('wheel', (e) => {
    e.preventDefault();
    e.stopPropagation();
}, { passive: false });

const chatMessages = document.getElementById('chat-messages');
chatMessages.addEventListener('wheel', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const delta = e.deltaY;
    chatMessages.scrollTop += delta;
}, { passive: false });

// Dodaj obsługę touchmove dla urządzeń mobilnych
chatMessages.addEventListener('touchmove', (e) => {
    e.stopPropagation();
}, { passive: false });