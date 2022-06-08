addLayer("C", {
    name: "Coins", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "C: Reset for coin points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
	upgrades: {
		11: {
			title: "Partial Production",
    		description: "Start gaining points.",
    		cost: new Decimal(1),
        },
		12: {
			title: "Add Points",
    		description: "add This one.",
    		cost: new Decimal(2),
        },
		13: {
			title: "Wheel Gaing Desculpe Gain",
    		description: "Gain This mulitipler Of 10",
    		cost: new Decimal(50),
        },
		14: {
			title: "Million gain",
    		description: "add This million",
    		cost: new Decimal(4000),
        },
		15: {
			title: "times million",
    		description: "what",
    		cost: new Decimal(1e6),
        },
		21: {
			title: "times trillion",
    		description: "Wheel do get a trillion!",
    		cost: new Decimal(1e12),
        },
		22: {
			title: "Decillion mulit",
    		description: "Decillion mulit",
    		cost: new Decimal(1e17),
        },
		23: {
			title: "Googol mulit",
    		description: "what If do there creators?",
    		cost: new Decimal(1e50),
        },
		24: {
			title: "10 Power 400 of mulit",
    		description: "what If do there creators?",
    		cost: new Decimal(1e150),
        },
		25: {
			title: "10 Power 500 of mulit",
    		description: "10^500 mulit",
    		cost: new Decimal("1e550"),
        },
		26: {
			title: "Waiting for tertate",
    		description: "eee2e308 mulit",
    		cost: new Decimal("1e1050"),
        },
		27: {
			title: "Ultimato Upgrade | Win for percentage",
    		description: "This tree a Win This get ultimated for percentage by 50.",
    		cost: new Decimal("eeee308"),
        },
    },
})
