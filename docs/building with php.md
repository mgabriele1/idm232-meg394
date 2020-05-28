# Building Pages with PHP
- has built in methods
- methods
    - print_r() - tells type, name, and value
---
## User sending/requesting information
### Super Global Variables
- lets you access parameters no matter what the scope
### URL/ links (GET)
- method: GET
- query paramater (name of param = value)
- can tack on with &
- name of file ? name of param = value
- can use php to build links
### forms (POST)
### cookies (COOKIE)
---
## $_GET
- for links and urls
- page ? parameter
- query parameters 
    - come after ?
    - php use
    - can send more than one with &
    - give a value to something: page, search, etc
- php stores query parameters from url in an array
### Example
- can use php to make links more dynamic
- $link_name = 'Page 2'
- can use the GET variable to get the parameters passed
- cannot echo GET because it is an array
    - print_r (prints array)
    - creates an associative array
### Building a list
- standard for loop making a list item for all links
- pass in id of i
- page can determine id passed in by url
---
## Encioding
### Encoding GET values
- SECURITY
- certain characters cannot be used in url
- SAFE
    - letters
    - numbers
    - underscores
    - dashes
- RESERVED (file names and paramters cannot include)
    - !
    - '#'
    - $
    - &
    - '
    - ()
    - '*'
    - '+'
    - ,
    - /
    - :
    - ;
    - =
    - ?
    - @
    - []
    - INTERFERES WITH PHP
- enciding reserved character: converting character into %(hexidecimal # 0-9 and A-F)
    - encode
    - put in url
    - decode
- php
    - urlencode (string)
    - reserved characters will become hexidecimal equivalent
    - spaces become +
- steps
    - open php
    - give id a value
    - build link to go to page
        - open php
        - echo id value
    - if you have a no no variable in url it will misinterpet url array
- urlencode
    - automatically makes changes
    - between echo and parameter call url encode and pass in parameter
### Raw URL encoding
- rawurlencode
- safe variables remain
- unsafe variables become hexidecimal
- SPACE becomes '%20'
    - instead of +
- USE ON PATH (everything before ?)
- USE REGULAR ON EVERYTHING AFTER ?
## Encoding HTML
- reserved characters:
    - <>
    - &
    - "
### Dealing with Special Characters from Database
- htmlspecialchars(variable)
    - works only with above 4
        - <>
        - &
        - "
- htmlentities(variable)
    - any symbol with a coded alternative
    - also does basic 4
    - USE THIS ONE
### Dynamic Link
- rawurlencode (pageurl)
- urlencode (parameters)
- htmlspecialchars (linktext)
### Accessing Variables from URL
- $_GET(variable)
- gives access to value passed and allows you to use it in HTML
---
## Including Required Files
- a bunch of small files and include the pieces
- could maintain a file with all php functions and include between projects
### include()
- folder called includes (by choice)
    - a file for header
        - _header.php
    - a file for footer
        - _footer.php
    - index page
- open php, include header, close php
- index
- open php, include footer, close php
- UNDERSCORE
    - common naming convention for a PARTIAL file
    - allows you to glance and know which is partial (cannot run by itself)
    - functions file would not have _ because it is a function file that stands by itself
- include functions at top
- can open php later in the page and echo anything from function
### What to include()
- functions
    - can only be defined once
    - database 1
    - other 2
    - form 3
    - up to you how to organize
- layout sections
- reuable HTML/ PHP
### require ()
- does the same thing as include but raises a fatal error if file is not found
- include will keep going, will not throw error
### include_once()
- keeps track of files that have been included and will ignore repeats
- good for functions
### require once()
---
## Redirect
- send user to one place or another
- header (location:url) then EXIT
    - needs to happen at beginning of file
    - php code goes at top
- put in functions file
    - functionname(paramter-url)
    - then call header redirect
    - EXAMPLE
        - function redirect_to($new_locaton) {
            - header("Location: {$new_location}")
            - exit;
        - }
        - redirect_to("basic.html");
- can then create if to see if user has done something and redirect accordingly
---
# Forms
- action
    - name of file, path to file to process form
- method
    - post
- INPUTS    
    - must have a name attribute with unique value (like an id)
    - when we post data it will give it a key
    - if required add value = required
- submit
    - type, name, value = submit
    - will send data to form processing page
## $_POST
- associative array for form values
1. page with form
2. page for processing
## Form Processor
- grabs values and puts them in associative array
- can pull values from array using posts
    - variable = $_POST ("name value")
## Single Page Form Processing
- all logic related to form in one file
- form validation should be done before submission
### Check for Errors
- open php
- check to see if form is submitted
    - isset(post(submit))
- IF SET
    - set username and password
    - success message
- IF NOT SET
    - error message
- then echo the message