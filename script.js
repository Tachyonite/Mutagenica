outcomes = [
"human",
"humanoid mutant",
"disfigured mutant",
"feral mutant",
"husky",
"german shepherd",
"labrador",
"fox terrier",
"bulldog",
"dog mutt",
"cat",
"sphinx cat",
"maine coon",
"owl",
"grizzly bear",
"sun bear",
"black bear",
"horse",
"pony",
"miniature pony",
"donkey",
"mule",
"iguana",
"tuatara",
"polecat",
"marten",
"weasel",
"rat",
"sparrow",
"crow",
"banana slug",
"garden snail",
"giant snail",
"formless blob",
"eagle",
"mouse",
"cow",
"pidgeon",
"red fox",
"arctic fox",
"fennec fox",
"silver fox",
"sable",
"badger",
"meerkat",
"lion",
"tiger",
"cheetah",
"panther",
"jaguar",
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
"stoat",
"kiwi",
"ostritch",
"platypus",
"echidna",
"hedgehog",
"dingo",
"parrot",
"mink",
"mutant plant",
"mutant mushroom",
"sentient vine",
"shapeshifting blob",
"giant beetle",
"giant centipede",
"dragonfly",
"mutant fly",
"dire wolf",
"moose",
"elk",
"raccoon",
"toad",
"frog",
"cricket",
"possum",
"turtle",
"tortoise",
"goldfish",
"dolphin",
"mutant abomination",
"chicken",
"great white shark",
"hammerhead shark",
"raptor",
"moa",
"aardvark",
"capybara",
"hamster",
"tapir",
"orca",
"cockroach",
"woodpecker",
"guinea pig",
"salmon",
"tuna fish",
"peacock",
"humpback whale",
"coyote",
"prarie dog",
"lemming",
"bloodhound",
"sugar glider",
"lemur",
"red panda",
"panda",
"magpie",
"falcon",
"reindeer",
"turkey",
"quail",
"dove",
"wolfdog",
"african wild dog",
"carolina dog",
"mammoth",
"rhinocerous",
"zebra",
"hippopotamus"
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
	random = "human"
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
		outStr = "you've stayed " + random;
		timeStr = "You lived rurally and managed to live off the land, fending off former human animals and purifying all water and food before you drank it. The whole time,";
		var followUp = document.getElementById("humanFollowUp");
		var aOrAn = "a"
		
		if (localStorage.followedUp){
			if ("aeiou".includes(localStorage.followedUp.charAt(0))){
			aOrAn = "an"
			}
			followUp.innerHTML = "But all around you were the sounds of nature, thriving at last. Eventually, you forsook your humanity and drank from a river contaminated with residual mutagen. Changes wracked your body, and you <strong><span style='color:#2A2;'>became "+ aOrAn + " " +localStorage.followedUp +"</span>!</strong>"
		}else{
			followUp.innerHTML = "But all around you are the sounds of nature, thriving at last. <span class='secretBox' onclick='rerollMutant()' style='text-decoration:underline;'>Maybe you feel like you're missing out?</span>"
		}
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

function rerollMutant(){
	var nonHumanOutcomes = outcomes
	nonHumanOutcomes.shift()
	console.log(nonHumanOutcomes)
	var newrandom = nonHumanOutcomes[Math.floor(Math.random()*nonHumanOutcomes.length)];
	var aOrAn2 = "a"
	var followUp = document.getElementById("humanFollowUp");
	if ("aeiou".includes(newrandom.charAt(0))){
		aOrAn2 = "an"
	}
	followUp.innerHTML = "But all around you were the sounds of nature, thriving at last. Eventually, you forsook your humanity and drank from a river contaminated with residual mutagen. Changes wracked your body, and you <strong><span style='color:#2A2;'>became "+ aOrAn2 + " " +newrandom +"</span>!</strong>"
	localStorage.setItem("followedUp", newrandom);
}