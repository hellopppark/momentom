const quote = document.querySelector(".quote");
const author = document.querySelector(".quote__autho");

function getQuote() {
  return fetch("../quotes.json")
    .then((res) => res.json())
    .then((data) => {
      const quoteNumber = Math.floor(Math.random() * data.length) + 1;
      return data[quoteNumber];
    })
    .catch(() => console.error("Cannot get quotes data"));
}

export async function paintQuote() {
  const selectedQuote = await getQuote();
  if (!selectedQuote) return;
  const { quote: quoteMsg, author: quoteAuthor } = selectedQuote;
  quote.innerText = '"${quoteMsg}"';
  author.innerText = quoteAuthor;
}
