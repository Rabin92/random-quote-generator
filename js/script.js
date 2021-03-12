const quote = document.querySelector('#js-quote');
const author = quote.nextElementSibling;
const btn = document.querySelector('#js-btn');
const url = `https://api.quotable.io/random`;

const generateQuote = data => {
  quote.textContent = data.content;
  author.textContent = data.author;
};

const displayQuote = () => {
  fetch(url)
    .then(res => res.json())
    .then(data => generateQuote(data));
};

displayQuote();

// Event Listener
btn.addEventListener('click', displayQuote);
