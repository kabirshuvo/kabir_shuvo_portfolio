const animatedText = document.querySelector(".animated-text")


const theBestMe = ["A GOAL SETTER.", "A Father ...", "A Learner ..."]

let theBestMeIndex = 0;
let characterIndex = 0;

updatetheBestMeText()


function updatetheBestMeText(){
    characterIndex++
    animatedText.innerHTML = `
    <h1>${theBestMe[theBestMeIndex].slice(0, characterIndex)}</h1>
    `;
    if(characterIndex === theBestMe[theBestMeIndex].length){
        theBestMeIndex++
        characterIndex = 0;
    }
    if(theBestMeIndex === theBestMe.length){
        theBestMeIndex = 0
    }
    setTimeout(updatetheBestMeText, 300)
}