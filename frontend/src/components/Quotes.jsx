export const quotes = [
    "The only way to do great work is to love what you do.",
    "Innovation distinguishes between a leader and a follower.",
    "Stay hungry, stay foolish.",
    "Your time is limited, don't waste it living someone else's life.",
  ];
  
  export const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };