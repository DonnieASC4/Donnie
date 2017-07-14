//Proper array syntax to see a non rectangular array
var charizard = [
    "Blaze",
    266,
    false,
    ["Fire", "Flying"]
    ]   

//Object syntax (proper)
var charizardObject = {
    attack: "Blaze",
    HP : 266,
    legendary: false,
    types: ["Fire", "Flying"]
};

var Yeezy = {
    Brand: "Adidas",
    Model: "Yezzy Boost 350",
    Color: "Turtledove",
    Size: 9,
    Price: 3200
};

//class syntax

function Shoe(model, brand) {
    // The this keyword automatically creates a variable that can be reserved for the class.
    this.brand = brand;
    this.model = model;
}

// How to make a new Object: (How to make an instance of a class)
var boosts = new Shoe("Yeezy Boost 350", "Adidas");

function SuperHero(heroName,realName, superPower)  { 
    this.heroName = heroName;
    this.realName = realName;
    this.superPower = superPower;
    this.talk = function() {
        console.log("Hello citizen my name is "  + this.heroName);
    }
}

var DCHero = new SuperHero("SuperMan", "Clark Kent", ["Flight", "X-Ray Vision", "Heat Vision", "Super Strength"]);
var MarvelHero = new SuperHero("SpiderMan", "Peter Parker", ["Spidey Sense", "Web-Slinging", "Wall Climbing", "Super Strength"]);
