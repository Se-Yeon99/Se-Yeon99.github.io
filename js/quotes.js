const quotes = [
  {
    quotes: "Life ought to be a struggle of desire toward adventures whose nobility will fertilize the soul.",
    author:"Rebecca West",
  },
  {
    quotes: "Honesty is a good thing, but it is not profitable to its possessor unless it is kept under control.",
    author:"Don Marquis",
  },
  {
    quotes: "We can learn even from our enemies.",
    author:"Ovid",
  },
  {
    quotes: "Security is mostly a superstition. It does not exist in nature.... Life is either a daring adventure or nothing.",
    author:"Helen Keller",
  },
  {
    quotes: "Passion is the quickest to develop, and the quickest to fade. Intimacy develops more slowly, and commitment more gradually still.",
    author:"Robert Sternberg",
  },
  {
    quotes: "Nothing is more admirable than the fortitude with which millionaires tolerate the disadvantages of their wealth.",
    author:"Rex Stout",
  },
  {
    quotes: "Money can't buy friends, but it can get you a better class of enemy.",
    author:"Spike Milligan",
  },
  {
    quotes: "He that is busy is tempted by but one devil; he that is idle, by a legion.",
    author:"Thomas Fuller",
  },
  {
    quotes: "Morality is herd instinct in the individual.",
    author:"Friedrich Nietzsche",
  },
  {
    quotes: "Properly, we should read for power. Man reading should be man intensely alive. The book should be a ball of light in one's hand.",
    author:"Ezra Pound",
  },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 명언 0부터 9까지 불러와야됨  --> ㅡ그러기위해서는 mathModule
// 이미 여러개가 제공되고있음  Math.PI 콘솔에 입력하면 3.14뜸
//Math.random() 1부터 1사이의 숫자제공

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
