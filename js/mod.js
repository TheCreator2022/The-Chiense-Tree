let modInfo = {
	name: "The Coin Tree",
	id: "mymod",
	author: "nobody",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.0.0",
	name: "Coin Rank",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0.0 - Coin Rank</h3><br>
		- That It This?.<br>
		- Intial Release`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return hasUpgrade('C', 11)
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
        if (hasUpgrade('C', 12)) gain = gain.add(4)
        if (hasUpgrade('C', 13)) gain = gain.times(10)
        if (hasUpgrade('C', 14)) gain = gain.add(1e6)
        if (hasUpgrade('C', 15)) gain = gain.times(1e6)
        if (hasUpgrade('C', 21)) gain = gain.times(1e12)
        if (hasUpgrade('C', 22)) gain = gain.times(1e33)
        if (hasUpgrade('C', 23)) gain = gain.times(1e100)
        if (hasUpgrade('C', 24)) gain = gain.times("1e400")
        if (hasUpgrade('C', 25)) gain = gain.times("1e500")
        if (hasUpgrade('C', 26)) gain = gain.times("eee2e308")
        if (hasUpgrade('C', 27)) gain = gain.times(1.5)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}
