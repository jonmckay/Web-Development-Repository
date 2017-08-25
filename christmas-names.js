

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

function pickNames() {
	var names = ["Lauren", "Taylor", "Eric", "Joel", "Jon", "Mom", "Dad"];
	var shuffledNames = names.slice(0);
	shuffledNames = shuffle(shuffledNames);
	while(shuffledNames.length > 0)
	{
		console.log(shuffledNames.pop() + " gives to: " + names.pop());
	}
}

pickNames();