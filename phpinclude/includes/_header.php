<!DOCTYPE html>
<html lang="en">

<!--HEAD-->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Just a Pinch</title>
    <link rel="stylesheet" href="https://use.typekit.net/qcz2dur.css">
    <link rel="stylesheet" href="style.css" type="text/css"/>
    <link rel="icon" href="graphics/favicon.ico" type="image/x-icon"/>
    <link href="https://css.gg/css?=|bowl|close|heart|more-alt|search|time" rel="stylesheet">
</head>

<!--BODY-->
<body>

<!--HEADER-->
<div class="header">
    <h4><a href="index.php">Just a Pinch</a></h4>
    <div class="search-wrapper">
        <form action="index.php" method="POST"> 
            <input type="text" placeholder="  Search..." name="search" id="sbar">
            <button class="sicon" type="submit" name="submit">
                <i class="gg-search" id="sicon"></i>
            </button>
        </form>    
    </div>
</div>
<!--DROPDOWN-->
<div class="menu">
    <div id="more" class="dropdown2">
        <h5 id="helpclick2">
            filter
        </h5>
        <div class="drop2" id="ddcontent2">
            <p id="meat">
                <a href="index.php?filter=a"> 
                    Meat
                </a>
                <i class="gg-close" id="x1"></i>
            </p>
            <p id="sea"> 
                <a href="index.php?filter=b"> 
                    Seafood
                </a> 
                <i class="gg-close" id="x2"></i>
            </p>
            <p id="vege">
                <a href="index.php?filter=c"> 
                    Vegetarian
                </a> 
                <i class="gg-close" id="x3"></i>
            </p>
        </div>
    </div>
    <div id="more" class="dropdown">
        <h6 id="helpclick">
            help
        </h6>
        <div class="drop" id="ddcontent">
        <p>Browse <b>below</b> to see the collection of recipes</p>
        <p><b>Click</b> on any of the recipes to see the ingredients and cooking steps</p>
        <p>Use the <b>filters</b> option to the left to filter results by meal type</p>
        <p>The <b>search bar</b> above can be used to look up recipes by name, ingredient, cook time, etc.</p>
        </div>
    </div>
</div>
<!--HIDDEN FILTERS-->
<div class="hidden-filter">
    <div class="meat-h" id="meat-h" >
        <p>
            Meat
        </p>
    </div>
    <div class="sea-h" id="sea-h">
        <p>
            Seafood
        </p>
    </div>
    <div class="vege-h" id="vege-h">
        <p>
            Vegetarian
        </p>
    </div>
</div>