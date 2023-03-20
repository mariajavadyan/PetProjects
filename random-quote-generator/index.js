const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");


const apiURL = "http://api.quotable.io/random";


async function getQuote(){

    try{
        btnEl.innertext = "Loading...";
        btnEl.disabled = true;
        quoteEl.innerText = "Updating...";
        authorEl.innerText = "Updating...";
        const response = await fetch(apiURL);
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = "~" + quoteAuthor;
        btnEl.innertext = "Get a quote";
        btnEl.disabled = false;
    
        console.log(data);

    } catch (error) {
        console.log(error);
        btnEl.innerText = "An error happened, please try again later";
        btnEl.disabled = false;
    }



}

getQuote();

btnEl.addEventListener("click", getQuote)