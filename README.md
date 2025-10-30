# Section 5 – Refactoring Code Smells in Practice

SMELL -> Reafctoring Pattern

1. Duplicate Code -> Extract Function (106)
   All three button click handlers reapeat same logic
   updating document.title
   setting background based on even or odd number

Refactor: Created a hekper function named updateUI() now letting each button only updates the counter value and calls this function once

2. Mysterious Nmaes -> Rename Variable (137)
   used short and unclear variables
   (c,a,b,h,bI,bD,bR)

Refactor: Replaced confusing vraiables with ones that actually describe them.
ex(counter, incrementButton, resetButton etc...)

3. Global Data -> Encapsulate Variable (132)
   the original c variable was a counter but it was a global variable. Fowler described GLobal Data as dangerous since any code can change it.

Refactor: wrapped the counter value in a CounterModel object. Meaning access only happens in a single place now.
