
const inputText = document.querySelector("textarea");
const findLetterBtn = document.querySelector("button");
const outputLetter = document.querySelector("span");

const findLetter = () => {
    const wordsArray = inputText.value.split(" ");
    let lettersArray = [];
    let uniqueLetter = '';
    console.log(wordsArray);

    for (const word of wordsArray) {
        if (word !== '') {
            for (const letter of word) {
                if (word.indexOf(letter) === word.lastIndexOf(letter)) {
                    lettersArray.push(letter);
                    break;
                }
            }
        }
    }

    console.log(lettersArray);

    for (const letter of lettersArray) {
        if (lettersArray.indexOf(letter) === lettersArray.lastIndexOf(letter)) {
            uniqueLetter = letter;
            break;
        }
    }
        
    outputLetter.textContent = uniqueLetter;
}

findLetterBtn.addEventListener("click", findLetter);