outcomes = [
"human",
"humanoid mutant",
"disfigured mutant",
"feral mutant",
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
"formless blob",
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
"lynx",
"pig",
"boar",
"raven",
"centipede",
"stag beetle",
"mutagenic slime",
"octopus",
"squid",
"whale",
"elephant",
"ibex",
"sheep",
"goat",
"ferret",
"squirrel",
"seal",
"wolf",
"giraffe",
"cobra",
"python",
"chimera",
"hyena",
"gazelle",
"deer",
"skink",
];

timeSpans = [
"instant",
"minutes",
"hour",
"halfday",
"day",
"halfweek",
"week",
"halfmonth",
"month",
"sixmonths",
"year"
];

document.addEventListener('DOMContentLoaded', function() {
    mutate();
}, false);

function mutate(){

	var s = document.getElementById("transformOutcome");
	var t = document.getElementById("heldOut");
	var outStr = ""
	var timeStr = ""
	if (localStorage.animal){
		var random = localStorage.animal;
		var randomTime = localStorage.timespan;
	}
	else {
		var random = outcomes[Math.floor(Math.random()*outcomes.length)];
		var randomTime = timeSpans[Math.floor(Math.random()*timeSpans.length)];
	}
	timeStrings = {
		"instant":"You lived in a major city and were outside when the bombs fell, with no way to protect yourself. Gas filled your lungs almost instantly, and within thirty seconds",
		"minutes":"You lived in a major city and were outside when the bombs fell, but you put your shirt over your mouth...which worked for a few minutes before",
		"hour":"You lived in a major city and were inside when the bombs fell and heard the news, locking yourself inside your home. However, you didn't seal any windows or doors, so it was a matter of hours before",
		"halfday":"You lived in a major city and were inside when the bombs fell, and heard the news. You sealed yourself in a room and covered the door with duct tape. But...you missed a spot, and within 6 hours",
		"day":"You lived in the suburbs and saw the mist rolling towards your home. You barricaded yourself inside, sealing the gaps in the doors and windows, and wore a face mask. You never considered that when you went to take a drink from the tap that the groundwater might be contaminated...and soon",
		"halfweek":"You lived rurally, away from most of the chaos that was ensuing in major cities. Living on tank water, you were able to stay human for a few days...before you were bitten by something. Within a day following,",
		"week":"You were one of the few survivors to hold out for a week, before your already low water supplies ran out. You dug a well to gather more...but the groundwater had been contaminated, and it wasn't long before",
		"halfmonth":"You survived for fifteen days, keeping your humanity and limiting your exposure to mutagenic effects as much as you could. Your precautions were good, but not below safe levels. Changes came on within the next few days, and",
		"month":"Holding out for a month was no mean feat. You limited all time outside until the gas had settled, and purified all water and food. Just when you thought you were safe, you let your guard down and were bitten by something. The changes came fast, and within an hour after that,",
		"sixmonths":"It is unknown how many people survived for six months, but you were one of them. Living in the countryside and living self-sustainably was your best bet. It was a simple life you led, before a horde of migrating mutants broke in to your homestead and attacked. Even after fending them off, you noticed a bite mark...and within an hour",
		"year":"You were one day off surviving for a whole year. Purifying all your water and food, wearing gas masks, defending your homestead against mutants, the whole lot. You never counted on a leak in your roof to drip into your purified water supply. Hours before your one-year anniversary of staying human,"
	}
	if (random == "human"){
		outStr = "you have stayed " + random;
		timeStr = "You lived rurally and managed to live off the land, fending off former human animals and purifying all water and food before you drank it. To this day,";
	}
	else {
		if ("aeiou".includes(random.charAt(0))){
			outStr = "you became an&nbsp;" + random;
		}else{
			outStr = "you became a&nbsp;" + random;
		}
		
		timeStr = timeStrings[randomTime]
	}
	
	
   	s.innerHTML = outStr;
   	t.innerHTML = timeStr;
   	localStorage.setItem("animal", random);
   	localStorage.setItem("timespan", randomTime);
}