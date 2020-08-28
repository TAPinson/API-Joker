import { retrieveJoke } from './JokeProvider.js';

let jokeData = [];

const jokeBtn = document.querySelector(".request-joke-btn");
const punchlineBtn = document.querySelector(".request-punchline-btn");
const setupElement = document.querySelector(".joke-setup");
const punchlineElement = document.querySelector(".joke-punchline")


jokeBtn.addEventListener("click", () => {
  retrieveJoke()
	.then((responseData) => {
		jokeData = responseData;
    setupWriter(jokeData)
	})
});


punchlineBtn.addEventListener("click", () => {
  punchlineWriter(jokeData)
})


const setupWriter = (joke) => {
  setupElement.innerHTML = ""
  punchlineElement.innerHTML = ""
  setupElement.innerHTML += `
  ${joke.setup}`
}


const punchlineWriter = (joke) => {
  punchlineElement.innerHTML = ""
  punchlineElement.innerHTML += `
  ${joke.punchline}`
}










