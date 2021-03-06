/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator - by Erica Saunders
******************************************/

/* Array of objects that are quotes from various The Simpsons episodes.
Each object contains the quote and source. Additional properties (year, citation) included on some objects. 
All objects have an additional 'tags' property, categorizing the quote as coming from a main or secondary character.*/
let quotes = [
  {quote:"I didn\'t do it. Nobody saw me do it. You can\'t prove anything.", source:"Bart Simpson", citation:"" , year:"February 11th 1990", tag: "main character"},
  {quote:"Maybe, just once, someone will call me \'Sir\' without adding, \'You\'re making a scene\’.", source:"Homer Simpson", citation:"The Simpsons, Season 7, Episode 14", year:"February 4th 1996", tag: "main character"},
  {quote:"Ow, my eye! I\'m not supposed to get pudding in it!", source:"Lenny Leonard", citation:"The Simpsons, Season 12, Episode 5", year:"November 26th 2000", tag: "secondary character"},
  {quote:"There\'s something about flying a kite at night that\'s so unwholesome.", source:"Marge Simpson", citation:"The Simpsons, Season 6, Episode 21", year:"April 16th 1995", tag: "main character"},
  {quote:"Don\'t make me run! I\'m full of chocolate!", source:"Uter", citation:"The Simpsons, Season 8, Episode 7", year:"", tag: "secondary character"}  
];


// Function to calculate a random number and use it to pull a random quote from the 'quotes' array.
  function getRandomQuote() {
  let randomNumber = quotes[Math.floor(Math.random()*quotes.length)];
  return randomNumber;
}

//Array of colours from The Simpsons cartoon colour palette. 
let colours = [ "#3E7DC3", "#F6D519", "#EE592D", "#F7C6CC", "#4C545C" ];

//Function to calculate a random number and use it to pull a colour from the 'colours' array.
function getRandomColour() {
  let randomColour = colours[Math.floor(Math.random()*colours.length)];
  return randomColour;
}

// Function to compile the elements of the 'quote' array and print them to the screen and calls the getRandomColour function to change the background colour.
function printQuote() {
  let quoteHolder = getRandomQuote();
  let html = '';
    html += '<p class="quote">' + quoteHolder.quote + '</p>' + '<p class="source">' + quoteHolder.source ;  
        if (quoteHolder.citation ) {
        html +='<span class="citation">' + quoteHolder.citation + '</span>'; 
        }
        if (quoteHolder.year) {
        html += '<span class="year">' + quoteHolder.year + '</span>'; 
        }
        if (quoteHolder.tag) {
        html += '<br>' + '<br>' +'<span class="tag">' + quoteHolder.tag + '</span>'; 
        }
    html += '</p>';
    
  document.getElementById('quote-box').innerHTML = html;
  document.body.style.backgroundColor = getRandomColour();
}

//Refreshes the quote and background colour every 25 seconds. 

let intervalID = window.setInterval(printQuote, 25000);

// Event listener triggered when the button is clicked and the 'printQuote' function is called. 
printQuote()
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


