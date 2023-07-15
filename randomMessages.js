// Define an array of Eckhart Tolle quotes
const quotes = [
  "Realize deeply that the present moment is all you ever have.",
  "The primary cause of unhappiness is never the situation but your thoughts about it.",
  "The power for creating a better future is contained in the present moment: You create a good future by creating a good present.",
  "Life isn't as serious as the mind makes it out to be.",
  "Wherever you are, be there totally.",
  "Stress is caused by being 'here' but wanting to be 'there'.",
  "Whatever the present moment contains, accept it as if you had chosen it.",
  "The past has no power over the present moment.",
  "Acknowledging the good that you already have in your life is the foundation for all abundance.",
  "You do not become good by trying to be good, but by finding the goodness that is already within you.",
];

// Function to generate a random quote
function generateQuote() {
  // Generate a random index from the quotes array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  
  // Retrieve the quote at the random index
  const randomQuote = quotes[randomIndex];
  
  // Return the random quote
  return randomQuote;
}

// Generate and display a random quote
const quote = generateQuote();
console.log(quote);
