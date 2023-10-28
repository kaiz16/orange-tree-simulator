The Orange Tree Simulator is a program that simulates the life cycle of an orange tree. It allows the tree to grow and produce oranges over time. The simulator also includes features such as the ability to pick oranges from the tree, and end the simulation when the tree reaches its maximum age or dies.

## Getting Started

Your task is to implement the OrangeTree constructor function and the Orange constructor function.

- The OrangeTree constructor function should have the following features:

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

- The Orange constructor function should have the following features:
  - Should have `diameter` property to keep track of orange's diameter.

## Starter Code

The starter code is already provided in the `script.js` file.

**Note**: _Do not modify the code in the `driver.js` file. You should only write your code in the `script.js` file._

```js
function Orange() {
  // implement me...
}

function OrangeTree() {
  // implement me...
}
```

## Testing the Code

Once you are done, uncomment the following line in the `index.html` file to test your code.

```html
<script src="driver.js"></script>
```

If you have implemented the program correctly, you should see the output similar to the following:

```sh
Year 3 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 21
Year 4 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 31
Year 5 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 41
Year 6 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 51
Year 7 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 61
Year 8 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 71
Year 9 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 81
Year 10 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 11 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 12 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 13 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 14 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 15 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 16 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 17 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 18 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 19 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 20 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 21 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 22 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 23 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 24 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 25 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 26 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 27 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 28 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 29 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 30 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 31 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 32 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 33 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 34 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 35 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 36 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 37 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 38 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
Year 39 Report
Harvest: 3 oranges with an average diameter of 3 cm
Tree height: 91
At last, the tree has died. It produced a total of 111 oranges.
```

**Note**: _The output below is only an example. Your output may vary depending on the random numbers you use to generate the tree's age, height, etc._
