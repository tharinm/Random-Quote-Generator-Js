let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const api = "https://api.quotable.io/random";



function generateQuote() {
    fetch(api)
        .then((data) => data.json())
        .then((item) => {
            quote.innerHTML = item.content;
            author.innerHTML = item.author;
    } )
}

window.addEventListener('load',generateQuote)
btn.addEventListener("click", generateQuote);
