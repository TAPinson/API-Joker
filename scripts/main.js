import { retrieveJoke, retrieveProgrammingJoke, retrieveKnockKnockJoke } from './JokeProvider.js';


let jokeData = [];

const jokeBtn = document.querySelector(".request-joke-btn");
const punchlineBtn = document.querySelector(".request-punchline-btn");
const setupElement = document.querySelector(".joke-setup");
const punchlineElement = document.querySelector(".joke-punchline")
const selectorBox = document.getElementById('joke-selector')


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


// Select box for super challenge
selectorBox.addEventListener('change', () => {
  const selected = selectorBox.value
  if (selected === "general") {
    retrieveJoke()
    .then((responseData) => {
      jokeData = responseData;
      setupWriter(jokeData)
    })
  }
  else if (selected === "knock-knock") {
    retrieveKnockKnockJoke()
    .then((responseData) => {
      jokeData = responseData[0];
      console.log(jokeData.setup)
      setupWriter(jokeData)
    })
  }
  else if (selected === "programming") {
    retrieveProgrammingJoke()
    .then((responseData) => {
      jokeData = responseData[0];
      console.log(jokeData.setup)
      setupWriter(jokeData)
    })
  }
})



