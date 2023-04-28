const quotes = [
  "I can do it!",
  "Let's study hard!",
  "Let's cheer up today!",
  "Don't doze off!",
  "Focus!",
  "Don't put today's work off until tomorrow!",
];
const quote = document.querySelector("#quote");

function handleQuotes() {
  quote.innerText = quotes[Math.floor(Math.random() * quotes.length)];
}

handleQuotes();
