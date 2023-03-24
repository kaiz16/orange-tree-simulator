The Orange Tree Simulator is a program that simulates the life cycle of an orange tree. It allows the tree to grow and produce oranges over time. The simulator also includes features such as the ability to pick oranges from the tree, and end the simulation when the tree reaches its maximum age or dies.

## Getting Started

Your task is to implement the OrangeTree class and the Orange class.

- The OrangeTree class should have the following features:

  - Should have `age` property to keep track of tree's age.
  - Should have `height` property to keep track of tree's height.
  - Should have `oranges` property to keep track of tree's oranges. This property should be an array of orange objects.
  - Should have `_dead` property to know if tree has died. (Underscore is used to indicate that this property is private. For this reason, you should not access this property directly. Instead, you should use the `dead` getter and setter methods.)
  - Should have `_maxAge` property to keep track of tree's maximum age. (Underscore is used to indicate that this property is private. For this reason, you should not access this property directly. Instead, you should use the `maxAge` getter and setter methods.)
  - Should have `ageMe` method that ages the tree by one year.
  - Aging the tree should also make it grow taller. You can decide how much it grows in a year. Height should only increase for the first 10 years of the tree's life.
  - Aging the tree should also make it produce oranges. You can decide how many oranges it grows in a year but it should not grow oranges when it is dead or during the first 3 years of its life.
  - Tree should die when it reaches its maximum age.
  - Should have a method called `hasAnyOranges` that returns true if tree has any oranges.
  - Should have a method called `pickAnOrange` that can pick an orange from the tree.

- The Orange class should have the following features:
  - Should have `diameter` property to keep track of orange's diameter.

### Starter Code

```js
class Orange {
  // implement me...
}

class OrangeTree {
  // implement me...
}
```

Once you have implemented the program, use the driver code below to test your program. Copy and paste the following code at the bottom of your file and run it with `node your_file_name.js`.

```js
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
```
