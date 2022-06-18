const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username";

function onLoginSubmit(event){
   event.preventDefault(); 
   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY, username);
   paintGreetings(username);
}

function paintGreetings(name){
   greeting.innerText=`Have a Nice Day ${name} ✨ `;
   greeting.classList.remove(HIDDEN_CLASSNAME);
   loginForm.classList.add(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername==null){
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit);
}else{
   paintGreetings(savedUsername);
}