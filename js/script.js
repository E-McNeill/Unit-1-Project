/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [
  {quote:"I didn/'t do it. Nobody saw me do it. you can/'t prove anything.", source:"Bart Simpson", citation:"The Simpsons, Season 1, Episode 6", year:"February 11th 1990"},
  {quote:"Maybe, just once, someone will call me /'Sir/' without adding, /'You/'re making a scene/’.", source:"Homer Simpson", citation:"The Simpsons, Season 7, Episode 14", year:"February 4th 1996"},
  {quote:"Ow, my eye! I/'m not supposed to get pudding in it!", source:"Lenny Leonard", citation:"The Simpsons, Season 12, Episode 5", year:"November 26th 2000"},
  {quote:"There/'s something about flying a kite at night that/'s so unwholesome.", source:"Marge Simpson", citation:"The Simpsons, Season 6, Episode 21", year:"April 16th 1995"},
  {quote:"Don/'t make me run! I/'m full of chocolate!", source:"Uter", citation:"The Simpsons, Season 8, Episode 7", year:"November 19th 1995"}  
];




/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
  var randomNumber = quotes[Math.floor(Math.random()*quotes.length)];
  return randomNumber;
}
console.log(getRandomQuote());


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.