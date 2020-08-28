let joke;


export const retrieveJoke = () => {
	return fetch("https://official-joke-api.appspot.com/jokes/random")
	.then(response => response.json())
}


export const retrieveProgrammingJoke = () => {
	return fetch("https://official-joke-api.appspot.com/jokes/programming/random")
	.then(response => response.json())
}


export const retrieveKnockKnockJoke = () => {
	return fetch("https://official-joke-api.appspot.com/jokes/knock-knock/random")
	.then(response => response.json())
}