"use strict";

const OrangeTree = require('./tree')

let tree = new OrangeTree()

// ages the tree until it has oranges
while (!tree.hasAnyOranges()) {
    tree.ageMe()
}


let totalOranges = null;
// while the tree is not dead
while (!tree.dead){
    // for every year we have an empty basket
    const basket = []

    // while tree has oranges, pick and place it in our basket
    while (tree.hasAnyOranges()){
        basket.push(tree.pickAnOrange())
    }
    // keep track of how many oranges we have collected until the tree is dead
    totalOranges += basket.length
    let averageDiameter = basket.reduce((sum, orange) => {
        return sum + orange.diameter
    }, 0)

    console.log(`Year ${tree.age} Report`)
    console.log(`Harvest: ${basket.length} oranges with an average diameter of ${averageDiameter} cm`)
    console.log(`Tree height: ${tree.height}`)
    tree.ageMe()
}
console.log(`At last, the tree has died. It produced a total of ${totalOranges} oranges.`)
