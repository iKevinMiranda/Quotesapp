const quoteElement = document.getElementById('quote');
const button = document.getElementById('new-quote');

const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    quoteElement.innerText = `"${data.content}" — ${data.author}`;
};

button.addEventListener('click', fetchQuote);

fetchQuote();