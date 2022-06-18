const quotes = [
  {
    quotes: "이 세상에 위대한 사람은 없다. 단지 평범한 사람들이 일어나 맞서는 위대한 도전들이 있을 뿐이다.",
    author:"윌리엄 프레데릭 홀시",
  },
  {
    quotes:"해보지 않고는 당신이 무엇을 해낼 수 있는지 알 수 없다.",
    author: "프랭클린 아담",
  },
  {
    quotes:"위대한 업적은 대개 커다란 위험을 감수한 결과이다",
    author:"헤로도토스",
  },
  {
    quotes:"한 사람이 먼저 가고 걸어가는 사람이 많아지면 그것이 곧 길이 되는 것이다.",
    author:"루싄",
  },
  {
    quotes:"오늘 할 수 있는 일을 내일로 미루지 마라.",
    author:"벤자민 프랭클린",
  },
  {
    quotes:"할 수 있다고 믿는 사람은 그렇게 되고 할 수 없다고 믿는 사람 역시 그렇게 된다.",
    author :"샤를 드골", 
  },
  {
    quotes:"스스로 존경하면 다른 사람도 그대를 존경할 것이다.",
    author:"공자",
  },
  {
    quotes: "경험은 무슨 일을 할지를 말해주며 자신감은 그 일을 할 수 있게 해준다.",
    author:"스텐스미스",
  },
  {
    quotes:"자신의 능력을 믿어야 한다. 그리고 끝까지 굳세게 밀고 나가라.",
    author:"로잘린 카터",
  },
  {
    quotes:"너의 길을 가라. 남들이 무엇이라 하든지 내버려 두라.",
    author:"A.단테",
  },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 명언 0부터 9까지 불러와야됨  --> ㅡ그러기위해서는 mathModule
// 이미 제공되고있음 Math.PI 콘솔에 입력하면 3.14뜸
//Math.random() 1부터 1사이의 숫자제공

// Math.floor(Math.random() * 10)


const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
