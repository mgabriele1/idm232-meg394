# Php
- php skips the steps of replacing with java and having to input all of the information
- can pull right from database
- can turn off and on - embedded langauge
- can put php in line with html
- can also have external php files
    - only php code
    - to house functions etc
- must be have a server running to run php
---
## Databases
- database will look extremely similarly to a spreadsheet
    - rows and columns
- every row will have a unique ID number
- every column can have an ID
- can use images in one column separated by a character (,)
    - img 1, img 2, ...
    - mimics an array
- can use images in single columns
---
## Pages
- build out page using single template an database fill-in
- at top will be able to catch a number input and use that specific row to fill in the page
- one template page!
---
# Variables
- start with $
- followed by letter (or underscore)
    - avoid underscore because that is what php uses for their built in variables
    - avoid multiple underscores
- CASE SENSITIVE
- camelcase is ok (camelCase)
- underscores is the going standard (camel_case)
- DONT USE DASHES
- can use numbers
- PHP HAS SOME RESERVED WORDS   
    - <a href="http://php.net/manual/en/reserved.php">Predefined words</a>
    - editor should tell you
## set up
- $my_var = 1;
- echo $my_var;
    - will return value of variable
# string
    - $my_var = "string";
- can put html inside of string "< p>text</ p>"
    - will be included when rendered
- double or single quotes is ok with strings
    - different functionality
- DOUBLE QUOTE
    - echo "$variable Again"; // Hello World Again
- SINGLE QUOTE
    - echo '$variable Again'; // $variable Again
- concatenation
    - $var1 . " " . $var2
    - hello (space) world
## conatenated variables
- option 1
    - $third = $first;
    - $third . =$second
        - this defines the concatenation to third
        - useful because you can define a variable and add contatenations later
        - without . it would be reassigning the variable $third
        - can use in following lines to continue concatenating onto the end - DOES NOT REPLACE CONCATENATION TACKS ONTO END
- option 2
    - $third = $first . $second;
    - starts to become too long of a line of code with multiple concatenations
## functions
- uppercase/ lowercase
- uppercase just first letter
- get legnth
- replace string
- replace specific word in string
## numbers
- can echo basic math
- store numbers as variables
- math operations
- order of operations!
- random numbers
- round
    - to any number of decimals
    - up (ceiling)
    - down (floor)
- square roots
- incrament/ decrament
    - $var2++; (up1)
    - var2--; (down1)
- can deal with decimals/ fractions (floating numbers)
    - stored differently than integers in computers
    - handled differently
    - dont add decimal unless you need it
- can check to see if value is number, integer, or float
## basic arrays
- USE WHEN ORDER IS MOST IMPORTANT
- ordered integer index collection of objects
    - can group strings and integers in a group giving them a speicifc position
    - can refer back to objects with their position
    - INDEXED STARTING AT 0
- $numbers = [4, 8, 12, 16];
- accessing
    - echo $numbers[1] - 8
- can contain mixed information: numbers, integers, other arrays
- referencing an array inside an array
    - echo $numbers[3]; // array
    - echo $numbers [3][1]; // returns item inside of inner array at spot 1
- can assign values $numbers [2] = mouse;
    - will work adding pocket 4 if theres only 0-3
- $number [] = mouse;
    - fills next empty pocket
## associative arrays
- USE WHEN THERES PARTICULAR LABEL TO REFERENCE
- for storing variables within arrays
- $assoc = ["first_name" => "mel",]; (continue next on new line)
    - how to define variables in arrays
- refencing 
    - echp $assoc["first_name"];
- saves programmers from remembering what pocket info is stored in
## array functions
- sort array filled with numbers
    - sort or reverse sort 
    - (high/ low)
    - alphabetical
- how many items
- highest/ lowest numbers
- IMPLODE/ EXPLODE
    - take a group of numbers/ strings stored in array
    - look for particular character
    - every time it sees that character it separates into a new pocket of array
- is something in array
- <a href="php.net/manual/en/ref.array.php">ALL FUNCTIONS</a>
## booleans
- value true or false
    - true // 1
    - false // (returns nothing)
- no quotes
- $var = true;
- is_bool
    - built in function to check if something is boolean
- very important for conditional statements
## constants
- VALUE CAN NOT BE CHANGED
    - when settig up database these should be constants
- capital letters
- no dollar sign
- have to use define function to define it
- define ("NAME", 980);
    - can define strings 
    - single or double doesn't matter unless making the value another string