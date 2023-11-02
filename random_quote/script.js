const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "If you tell the truth, you don't have to remember anything. - Mark Twain"
  ];
  
  // Example usage:
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
const showcontainer=document.querySelector(".container")
const button=document.querySelector("button")

button.addEventListener("click",()=>{
    showcontainer.innerHTML=randomQuote
})
