const flags = [
    {
        img: "https://flagcdn.com/w320/fr.png",
        correct: "Francija",
        options: ["Vācija", "Francija", "Itālija"]
    },
    {
        img: "https://flagcdn.com/w320/de.png",
        correct: "Vācija",
        options: ["Beļģija", "Vācija", "Nīderlande"]
    },
    {
        img: "https://flagcdn.com/w320/it.png",
        correct: "Itālija",
        options: ["Itālija", "Īrija", "Meksika"]
    },
    {
        img: "https://flagcdn.com/w320/es.png",
        correct: "Spānija",
        options: ["Spānija", "Portugāle", "Rumānija"]
    }
];

let current = 0;

function loadQuestion() {
    const flag = flags[current];
    document.getElementById("flag").src = flag.img;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    flag.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(btn);
    });

    document.getElementById("result").innerText = "";
}

function checkAnswer(answer) {
    const correct = flags[current].correct;
    const result = document.getElementById("result");

    if (answer === correct) {
        result.innerText = "Pareizi!";
    } else {
        result.innerText = "Nepareizi! Pareizā atbilde: " + correct;
    }
}

function nextQuestion() {
    current = (current + 1) % flags.length;
    loadQuestion();
}

loadQuestion();
