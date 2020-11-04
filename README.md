```
node index.js
```

OrangeTree class
+ Should have maximum age property
+ Should have age property to keep track of tree's age
+ Should have height property
+ Should have dead property to know if tree has died
+ Should have age! method that ages the tree by one year 
+ In the age! method, grow oranges when it reaches to 3 or more years old.
+ In the age! method, Make it die when it reaches to max age
+ Implement a method that returns true if tree has any oranges.
+ Implement a method that can pick an orange from the tree.

Orange Class
+ Should have diameter property

Test
```
Initialize new Orange tree object
while (tree has no oranges)
    age the tree by one year
end

while ( tree is not dead )
    Intitialize empty basket

    while ( tree has oranges )
        pick one orange and place it in the basket
    
    Calculate the average diameter for this harvest

    Output tree information ( Like what year it is, height of a tree, average diameter )

    age the tree by one year
end

Output "At last, the tree is dead"
```