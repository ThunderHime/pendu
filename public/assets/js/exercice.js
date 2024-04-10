const words = ["papillon", "ordinateur", "malware", "vélo", "chien"];

words.forEach((word) => {
    // Ici j'ai imbriqué dans la boucle pour faire pour chaque mot
    for (let i = 0; i < word.length; i++) {
        const char = word[i]; // Ici à chaque tour de boucle je récup une lettre de mon mot
        const arrayLetter = char;
        // console.log(char);
    }
});

function random(words) {
    return words[Math.floor(Math.random() * words.length)]
}
random(words);
console.log(random(words));



//afficher un tiret en fonction du mot
//en fonction de la lettre choisit par l'utilisateur, afficher la lettre

//Ici je récupère un élément de mon DOM grâce à son id
// const keyDisplay = document.querySelectorAll('li');
// console.log(keyDisplay);


// const displayLetter = () => {

// }

// keyDisplay.addEventListener('keyup', displayLetter);