# Control Structures
- control flow of code
- make choices based on circumstances
## Logical expressions
- function similarly/ similar in concept to javascript
### If Statement
- syntax  
    - if ($a > $b) {
    - echo "a larger than b";
    - }
- true/ false
    - false not executed
- can inlude else
    - else {
        - do that
    - }
- ELSEIF
    - all one word
### Comparison Operators
- equal: ==
- identical: ===
- compare: > < >= <=
- not equal: !=
- not identical: !==
### Logical Operators
- and: &&
- or: ||
- not: !
- divide: %
---
## Switch Statements
- more efficient if/ else statements
- switch (value) {
    - case test_value1:
        - statement 1;
    - default:
        - statement;
- }
- BREAK
-  switch (value) {
    - case test_value1:
        - echo "stuff";
        - break;
    - default:
        - statement;
- if any echo commands are executed 'break' breaks out of switch
---
## Loops
- loops until conditon is met
### while
- syntax
    - while (expression) {
        - statement
    - }
- statement gets looped over and over while the expression is still true
- need to incramnent value in expression or loop will continue forever
### for
- syntax
    - for (init val; test; change to val) {
        - statement
    - }
### for each
- USE WHEN WORKING WITH ARRAY
- syntax
    - foreach ($array <b>as</b> $value)
        - statement
- array AS variable
- loops through array grabbing one pocket at a time assigning it to second variable
### <a href="https://github.com/philsinatra/IDM232/blob/master/instructor_materials/IDM232-03-control_structures.md">Loops Reference</a>
### for each for associative arrays
- each pocket of the array is built with a key and a value (key/ value pairs)
    - "first_name" => "Homer",
- syntax
    - foreach ($array as $key => $ value) {
        - statement
    - }
- THIS IS HOW WE WILL ORGANIZE DATABASE MATERIALS
    - can use functions to stylize data before echo
---
## continue and break
### continue
- used to skip in a loop
- example
    - if ($count == 5) {continue;}
    - will skip 5
### break
- breaks out of loop
- example
    - if ($count == 5) {break;}
    - will omit 5 and break out
---
## Functions
- syntax exactly like java
    - function name($v1, $v2) {
        - statement
    - }
- letters, numbers, underscore, dashes, NO SPACES
- must start with letter or underscore
- case sensitive
- DONT START WITH UNDERSCORE, USE LOWERCASE
### defining/ passing info
- define at the root of the document
- once defined cannot be redefined
- SEPARATE FUNCTION FILE CALLED AT THE TOP OF THE FILE
- can pass data directly or pass as variables
### php built in functions
- set syntax
- will accept certain number of variables
- our function syntax will be the same
### returning values 
- eachoing the value outside DOES NOT WORK
- to extract value
    - RETURN COMMAND
- syntax
    - statement
    - return $variable;
- makes function flexible
- can then set a variable equal to the function
    - $result = add(3,4);
### returning more than one variable
- return array ($var 1, $var2)
### local and global variables
- variables called inside function are LOCAL to that function, cannot be called outside unless returned
- can call a global variable inside a function
    - global $bar;
- once function is called global variable will have new value
- alternative to return
---
## default argument value syntax
- function paint ($color)
- calling syntax
    - echo paint (blue);
- ERROR IF NO VALUE GIVEN
    - can set a default value to prevent
    - syntax
        - function paint ($color="red")
    - default values will be overriden if the function is called with new values
- matching values to arguments
    - if you only want to pass one value in it will get assigned to the first agument in the function
---
# Example Notes
- echo is only to display string or number values
- print_r 
    - prints values of array
    - prints all the values like an associative array
    - [1] => cat
    