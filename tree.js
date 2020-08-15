const Orange = require('./orange')

class OrangeTree {
    // Private property should only be accessed inside this class.
    constructor(){ 
        this.age = 1;
        this._dead = false; // This is a private property
        this.height = 1
        this._maxAge = 40; // This is also a private property. 
        this.oranges = [];
    }

    get dead(){
        return this._dead
    }

    set dead(value){
        this._dead = value
    }

    // max age doesn't have a setter. Because it's value is static and should stay unchanged.
    get maxAge(){
        return this._maxAge
    }

    ageMe(){
        this.age += 1; // age the tree by one year

        // Height only increases for the first 10 years (in cm)
        if (this.age <= 10) {
            this.height += 10
        }

        // if tree is older than 3 years old and it is not dead. Grow oranges
        if (this.age >= 3 && !this.dead){
            [1,2,3].forEach( () => {
                this.oranges.push(new Orange)
            })
        }
        
        // If the tree's age has reached it's maximum limit. Then it should die.
        if (this.age >= this.maxAge){
            this.dead = true
        }
        
    }

    hasAnyOranges(){
        return !!this.oranges.length
    }

    pickAnOrange(){
        if (!this.hasAnyOranges){
            throw new error("No oranges in this tree.")
        }

        return this.oranges.pop()
    }
}

module.exports = OrangeTree;