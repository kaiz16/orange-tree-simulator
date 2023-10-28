// Driver code below - DO NOT MODIFY
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
// Driver code above - DO NOT MODIFY\
