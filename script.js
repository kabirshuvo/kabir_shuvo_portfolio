// Hero Section Carusal
let currentCard = 1;
const cardCount = 3;
const cardCarousel = document.querySelector(".card-carousel");
const cards = document.querySelectorAll(".card");
const buttons = document.querySelectorAll(".hero-btn");

function changeCard(direction) {
    cards[currentCard - 1].classList.remove("active");
    currentCard += direction;
    if (currentCard < 1) currentCard = cardCount;
    if (currentCard > cardCount) currentCard = 1;
    cards[currentCard - 1].classList.add("active");
}

function changeCardByIndex(cardIndex) {
    cards[currentCard - 1].classList.remove("active");
    currentCard = cardIndex;
    cards[currentCard - 1].classList.add("active");
}

// Add event listeners to the buttons
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        changeCardByIndex(index + 1);
    });
});


const animatedText = document.querySelector(".animated-text")


const theBestMe = ["Innovator ...", "Problem-Solver ...", "Collaborator ..."]

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
    setTimeout(updatetheBestMeText, 100)
}

// Canvas Animation
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, 'red');
gradient.addColorStop(0.2, 'yellow');
gradient.addColorStop(0.4, 'green');
gradient.addColorStop(0.6, 'cyan');
gradient.addColorStop(0.8, 'blue');
gradient.addColorStop(1, 'magenta');

class Symbol {
  constructor(x, y, fontSize, canvasHeight) {
    this.characters = `
        KABIR'S CREATION`;
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.canvasHeight = canvasHeight;
  }
  draw(context) {
    this.text = this.characters.charAt(
      Math.floor(Math.random() * this.characters.length)
    );
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.99) {
      this.y = 0;
    } else {
      this.y += 1;
    }
  }
}

class Effect {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = 22;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialize();
    console.log(this.symbols);
  }

  #initialize() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
    }
  }
  resize(width, height){
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = this.canvasWidth/this.fontSize;
    this.symbols = [];
    this.#initialize();
  }
}

const effect = new Effect(canvas.width, canvas.height);
let lastTime = 0;
const fps = 1;
const nextFrame = 1000 / fps;
let timer = 0;

function animate(timeStamp) {
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  if (timer > nextFrame) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.07)";
    ctx.textAlign = 'center';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = gradient;
    // "#0aff0a";
    ctx.font = effect.fontSize + "px monospace";
    effect.symbols.forEach((symbol) => symbol.draw(ctx));
  }else {
    timer += deltaTime;
  }

  requestAnimationFrame(animate);
}

animate(0);

window.addEventListener('resize', function(){
    canvas.width = this.window.innerWidth;
    canvas.height = window.innerHeight;
    effect.resize(canvas.width, canvas.height);
})