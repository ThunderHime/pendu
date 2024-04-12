// HTML Elements
const inputUserChoice = document.querySelector("#inputUserChoice");
const formChoice = document.querySelector("#formChoice");
const wordContainer = document.querySelector("#wordContainer");
const errorCounterContainer = document.querySelector("#errorCounterContainer");
const archivedUserChoicesContainer = document.querySelector("#archivedUserChoicesContainer");
const resultGameContainer = document.querySelector("#resultGameContainer");
const buttonReplay = document.querySelector("#buttonReplay");

// Events
formChoice.addEventListener("submit", submitUserChoice);
buttonReplay.addEventListener("click", startGame);

// Initialization
const words = ["papillon", "ordinateur", "malware", "aube", "chien"];
let randomWord;
let randomWordArray;
let result;
let errorCounter;
let archivedUserChoices;

startGame();


// Function to randomize choice of a word in an array of string
function random(words) {
    return words[Math.floor(Math.random() * words.length)]
}

//function to submite user choice
function submitUserChoice(event) {
    event.preventDefault();

    var userChoice = inputUserChoice.value.toUpperCase();
    inputUserChoice.value = "";

    if (archivedUserChoices.find(c => c == userChoice)) {
        return;
    }

    if (randomWordArray.some(c => c == userChoice)) {
        for (let i = 0; i < randomWordArray.length; i++) {
            if (randomWordArray[i] == userChoice) {
                result[i] = userChoice;
            }
        }
    }
    else {
        archivedUserChoices.push(userChoice);
        errorCounter++;
    }

    if (isLose()) {
        resultGameContainer.innerHTML = "Vous avez perdu.";
        formChoice.classList.add("d-none");
        buttonReplay.classList.remove("d-none");
        result = randomWordArray;
    } else if (isWin()) {
        resultGameContainer.innerHTML = "Vous avez gagné.";
        formChoice.classList.add("d-none");
        buttonReplay.classList.remove("d-none");
    }

    refreshInterface();
}
//function to manage the loser game
function isLose() {
    if (errorCounter >= 10) {
        return true;
    }

    return false;
}

//function to manage the winner game
function isWin() {
    if (result.every((val, index) => val == randomWordArray[index])) {
        return true;
    }
    return false;
}

//function to manage the refresh interface
function refreshInterface() {
    wordContainer.innerHTML = result.join(" ");
    errorCounterContainer.innerHTML = errorCounter;
    archivedUserChoicesContainer.innerHTML = archivedUserChoices.join(" . ");
    if (errorCounter > 0) {
        const errorElement = document.querySelector(`#error-${errorCounter}`);
        errorElement.classList.remove("d-none");
        if (errorCounter > 1) {
            const errorImages = document.querySelector(`#error-${errorCounter - 1}`);
            errorImages.classList.add("d-none");
        }
    }
}

//funcion to manage the start
function startGame() {
    randomWord = random(words).toUpperCase();
    randomWordArray = randomWord.split('');
    result = [];
    randomWordArray.forEach(element => {
        result.push("-");
    });
    errorCounter = 0;
    archivedUserChoices = [];

    console.log(randomWord);
    for (let i = 1; i <= 10; i++) {
        const errorElement = document.querySelector(`#error-${i}`);
        errorElement.classList.add("d-none");
    }
    formChoice.classList.remove("d-none");
    buttonReplay.classList.add("d-none");
    resultGameContainer.innerHTML = "";
    refreshInterface();
}