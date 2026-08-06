const quoteTextEl = document.getElementById('quote-text');
const quoteAuthorEl = document.getElementById('quote-author');
const quoteStatusEl = document.getElementById('quote-status');
const quoteCardEl = document.querySelector('.quote-card');
const newQuoteBtn = document.getElementById('new-quote');
const copyBtn = document.getElementById('copy-quote');
const shareBtn = document.getElementById('share-quote');
const yearEl = document.getElementById('year');

let currentQuote = { text: '', author: '' };
let isFetching = false;

const FALLBACK_QUOTES = [
    { text: 'A única maneira de fazer um excelente trabalho é amar o que você faz.', author: 'Steve Jobs' },
    { text: 'Seu tempo é limitado, então não o gaste vivendo a vida de outra pessoa.', author: 'Steve Jobs' },
    { text: 'Inovação distingue um líder de um seguidor.', author: 'Steve Jobs' },
    { text: 'O design não é apenas o que parece e o que se sente. Design é como funciona.', author: 'Steve Jobs' },
    { text: 'Comece onde você está. Use o que você tem. Faça o que você puder.', author: 'Arthur Ashe' },
];

const randomFallback = () =>
    FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];

const setStatus = (message, { error = false, visible = true } = {}) => {
    quoteStatusEl.hidden = !visible || !message;
    quoteStatusEl.textContent = message || '';
    quoteStatusEl.classList.toggle('is-error', error);
};

const setLoading = (loading) => {
    isFetching = loading;
    quoteCardEl.setAttribute('aria-busy', loading ? 'true' : 'false');
    quoteTextEl.classList.toggle('is-loading', loading);
    newQuoteBtn.disabled = loading;
    newQuoteBtn.classList.toggle('is-busy', loading);
    copyBtn.disabled = loading || !currentQuote.text;
    shareBtn.disabled = loading || !currentQuote.text;
};

const renderQuote = ({ text, author }) => {
    currentQuote = { text, author };
    quoteTextEl.textContent = `"${text}"`;
    quoteAuthorEl.textContent = author;
    quoteTextEl.classList.remove('is-visible');
    void quoteTextEl.offsetWidth;
    quoteTextEl.classList.add('is-visible');
    copyBtn.disabled = false;
    shareBtn.disabled = false;
};

async function fetchFromDummyJson() {
    const response = await fetch('https://dummyjson.com/quotes/random');
    if (!response.ok) throw new Error('dummyjson');
    const data = await response.json();
    return { text: data.quote, author: data.author };
}

async function fetchFromZenQuotes() {
    const response = await fetch('https://zenquotes.io/api/random');
    if (!response.ok) throw new Error('zenquotes');
    const data = await response.json();
    const item = Array.isArray(data) ? data[0] : data;
    if (!item?.q) throw new Error('zenquotes');
    return { text: item.q, author: item.a || 'Desconhecido' };
}

async function fetchQuote() {
    if (isFetching) return;

    setLoading(true);
    setStatus('');

    const providers = [fetchFromDummyJson, fetchFromZenQuotes];

    for (const provider of providers) {
        try {
            const quote = await provider();
            renderQuote(quote);
            setLoading(false);
            return;
        } catch {
            /* tenta próximo provedor */
        }
    }

    const fallback = randomFallback();
    renderQuote(fallback);
    setStatus('Sem conexão com a API. Exibindo citação local.', { error: false });
    setLoading(false);
}

async function copyQuote() {
    if (!currentQuote.text) return;

    const formatted = `"${currentQuote.text}" — ${currentQuote.author}`;

    try {
        await navigator.clipboard.writeText(formatted);
        setStatus('Copiado para a área de transferência.');
        window.setTimeout(() => setStatus(''), 2500);
    } catch {
        setStatus('Não foi possível copiar.', { error: true });
    }
}

async function shareQuote() {
    if (!currentQuote.text || !navigator.share) return;

    try {
        await navigator.share({
            title: 'Citação inspiradora',
            text: `"${currentQuote.text}" — ${currentQuote.author}`,
        });
    } catch (err) {
        if (err.name !== 'AbortError') {
            setStatus('Compartilhamento indisponível.', { error: true });
        }
    }
}

if (navigator.share) {
    shareBtn.hidden = false;
}

yearEl.textContent = String(new Date().getFullYear());

newQuoteBtn.addEventListener('click', fetchQuote);
copyBtn.addEventListener('click', copyQuote);
shareBtn.addEventListener('click', shareQuote);

fetchQuote();
