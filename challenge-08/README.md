### INSTALLATION AND USE:

Run npm init to install the necessary dependencies before running the program. These should include jest and eslint.

This program can be used to find intersections in two linked lists

### ACCESSING METHODS:

#### Outputting intersections
`intersect.find` is a method which will search between two linked lists to find any shared values, and then return a new linked list holding only those values.

Example:
```javascript
// listA: {value: 1, next: {value: 2, next: {value: 3, next: null}}}
// listB: {value: 3, next: {value: 4, next: {value; 5, next: null}}}

intersect.find(listA, listB)
// returns {value: 3, next: null}
```
