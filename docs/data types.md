# Reading and Writing Files with Data Types
- client provides data

## What to ask
- how will data be provided?
- what operating system will this be run on?
- what browser?
- what resolution?
- where will the files be hosted?
- security/ firewall issues?

## Development Planning
- data structure and development?

## Programming Options
1. hand code HTML
2. Convert excel to MySQL (but client does not have MySQL)
3. Convert excel to some other format to be used with PHP 

## Dealing with Data
- MySQL
- XML
    - extensible markup langauge
    - similar to HTML
- CSV
- JSON
    - name and value points
    - similar to Jvaascript 
- Javascript Array

## PHP to JSON
- loop through JSON
- export HTML files

---

# How to Build
- excel database converted to JSON file
    - data arranged in arrays
    - pocket 0 is an object containing question and answers
- CSS done
- Javascript done

## New php file
- variable =  file_get_contents (file path)
    - now this variable holds the content of the JSON file
    - contents stored as atring of text

## Converting a string to an array
- variable = json_decode (file path)
    - becomes a standard class object (array)
    - php can now understand this database
    - each pocket of array has a question and an answer

## Building HTML Page with Data
- create a directory location to store data
- start a count i=1
    - start at 1 because question 1
- include in the main php file
    - create a php file for trivia page head
    - create php file for trivia page footer
1. loop through main array
    - foreach(main array->categories as $category)
        - loops through, focuses on category, saves info as variable
2. create output variable
    - everything needed to build html document
    - build out contents of file within loop
    1. get head file
    2. CONCATINATE, category info
    3. get footer file
3. building category info
    - within output section for category info
    1. {category->question}
    2. open unordered list
    3. close unordered list
    4. go inside list and get answer items
        - list item
        - anchor
    5. set up counter 
    6. foreach (category->answers-> as $answer)
    7. open brackets, inside create list item
    8. inside list item get count for box number, have a box showing number, and a hidden (css) box showing the answer

## Page Navigation
- next and previous
- if i>1
    - not on first page
    - need a back button
    - previous = i-1
- create href element that goes to previous page based on name 'question-(previous variable)'
    - between anchor tag open and close use arrows
- if i is not equal to count (json categories)
    - not on last page
    - want to add a next button

## Write HTML file
1. file = fopen(where does it go, question-i.html, write)
    - stores in variable
2. fwrite (file, output)
3. fclose(file)

## FINAL STEP IS TO INCRAMENT i
- otherwise stuck in loop forever

## Tips and Tricks
- /r adds line return
- prevents html file from being on one line
- outside of loop can print something to check directory since it will be a blank file

# Run the Script
- in the browser
    - refresh page to regenerate
    - not elegant/ polished
- build a form
    - when submitted executes php
    - button clicked
    - requires 2 redirects
- build form with AJAX
    - javascript + php
    - send and recieve info back and forth
    - asyncronous

## html
- build file with submit buttom
- add link to script

## build script
- in js
- use ajax
1. const xhr = new XHTMKHttpResuest();
2. const method = 'get'
3. const url = path to php script
4. call first form on page and add event listener for submission
5. call function on form submission
    - did something change
    - did we connect to file
    - did it execute
6. send

# file drop
- add section to drop files so they can be converted



