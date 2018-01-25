### INSTALLATION AND USE:

Run npm init to install the necessary dependencies before running the program.

This program can be used to find the nth node from the end of a linked list

### ACCESSING METHODS:

#### Finding n from the end
`list.nthFromEnd(n, linkedList)` takes in a number (n) and a linked list. The function will return the node that is an offset of n from the end of the linked list. If n is not a valid number, or is outside of the list, the function will return null.

Example:
```javascript
// list is currently {value: 3, next: {value: 2, next: {value: 1, next: {value: 0, next: null}}}}

list.nthFromEnd(2, list);
// returns {value: 2, next: {value: 1, next: {value: 0, next: null}}}
```
