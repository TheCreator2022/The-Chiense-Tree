addLayer("一", {
    name: "U+4E00", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "一", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "U+4E00", // Name of prestige currency
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
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
	upgrades: {
		11: {
			title: "U+4E00 Product",
    		description: "Start gaining points.",
    		cost: new Decimal(3),
        },
		12: {
			title: "U+4E00 Gain Product",
    		description: "Start super gaining points.",
    		cost: new Decimal(100),
        },
		13: {
			title: "U+4E00 100 Gain Product",
    		description: "Start super gaining this points.",
    		cost: new Decimal(500),
        },
		14: {
			title: "U+4E00 2,500 Gain Product",
    		description: "Start super gaining estimated points.",
    		cost: new Decimal(5000),
        },
		15: {
			title: "U+4E00 25,00 Gain Product",
    		description: "Start super gaining estimated points.",
    		cost: new Decimal(30000),
        },

    },
})


addLayer("T", {
    name: "U+4E01", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "T", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 20, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#00ffa6",
    requires: new Decimal(100000), // Can be a function that takes requirement increases into account
    resource: "U+4E01", // Name of prestige currency
    baseResource: "partial points", // Name of resource prestige is based on
    baseAmount() {return player.pa.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(0.5)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "a", description: "A: Reset for U+4E00 points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
	    11: {
	        title: "Start +2/sec",
        	description: "starting to 3 per second",
         	cost: new Decimal(1),
       	},
            12: {
	        title: "Start +7/sec",
        	description: "start to 10 per second",
         	cost: new Decimal(3),
       	},
            13: {
	        title: "1000/sec",
        	description: "what",
         	cost: new Decimal(36),
       	},
    },
})
