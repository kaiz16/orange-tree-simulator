"use strict";

class OrangeTree {
    // Private property should only be accessed inside this class.
    constructor() {
        this.age = 1;
        this._dead = false; // This is a private property
        this.height = 1
        this._maxAge = 40; // This is also a private property. 
        this.oranges = [];
    }

    get dead() {
        return this._dead
    }

    set dead(value) {
        this._dead = value
    }

    // max age doesn't have a setter. Because it's value is static and should stay unchanged.
    get maxAge() {
        return this._maxAge
    }

    ageMe() {
        this.age += 1; // age the tree by one year

        // Height only increases for the first 10 years (in cm)
        if (this.age <= 10) {
            this.height += 10
        }

        // if tree is older than 3 years old and it is not dead. Grow oranges
        if (this.age >= 3 && !this.dead) {
            [1, 2, 3].forEach(() => {
                this.oranges.push(new Orange)
            })
        }

        // If the tree's age has reached it's maximum limit. Then it should die.
        if (this.age >= this.maxAge) {
            this.dead = true
        }

    }

    hasAnyOranges() {
        return !!this.oranges.length
    }

    pickAnOrange() {
        if (!this.hasAnyOranges) {
            throw new error("No oranges in this tree.")
        }

        return this.oranges.pop()
    }
}

class Orange {
    constructor() {
        this.diameter = 1
    }
}

// Driver code - DO NOT MODIFY

// Initialize new Orange tree object
const tree = new OrangeTree();

// While tree has no oranges, age the tree by one year
while (!tree.hasAnyOranges()) {
    tree.ageMe();
}

// Initialize a variable to keep track of the total oranges picked from the tree
let totalOranges = null;

// While the tree is not dead
while (!tree.dead) {
    // Initialize empty basket
    const basket = [];

    // While tree has oranges, pick and place an orange into the basket
    while (tree.hasAnyOranges()) {
        basket.push(tree.pickAnOrange());
    }

    // Increment the total oranges picked by the number of oranges picked this harvest
    totalOranges += basket.length;

    // Calculate the average diameter for this harvest
    let averageDiameter = basket.reduce((sum, orange) => {
        return sum + orange.diameter;
    }, 0);

    // Output tree information (like what year it is, height of a tree, average diameter)
    console.log(`Year ${tree.age} Report`);
    console.log(
        `Harvest: ${basket.length} oranges with an average diameter of ${averageDiameter} cm`
    );
    console.log(`Tree height: ${tree.height}`);

    // Age the tree by one year
    tree.ageMe();
}

// Finally, the tree has died. Output the total number of oranges picked
console.log(
    `At last, the tree has died. It produced a total of ${totalOranges} oranges.`
);
// Driver code - DO NOT MODIFY