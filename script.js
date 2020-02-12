outcomes = [
"human",
"humanoid",
"dog",
"cat",
"owl",
"bear",
"horse",
"donkey",
"iguana",
"polecat",
"marten",
"weasel",
"rat",
"sparrow",
"crow",
"slug",
"shambling horror",
"eagle",
"mouse",
"cow",
"pidgeon",
"fox",
"badger",
"meerkat",
"lion",
"tiger",
"serval",
"lynx"
]

document.addEventListener('DOMContentLoaded', function() {
    mutate();
}, false);

function mutate(){

	var s = document.getElementById("transformOutcome");
	var outstr = ""
	if (localStorage.animal){
		var random = localStorage.animal
	}
	else {
		var random = outcomes[Math.floor(Math.random()*outcomes.length)];
	}
	
	if (random == "human"){
		outstr = "stayed " + random
	}
	else {
		outStr = "became a " + random
	}
	
   	s.innerHTML = random;
   	localStorage.setItem("animal", random);

}