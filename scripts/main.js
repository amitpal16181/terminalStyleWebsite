
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("Type 'help' to begin");
 
  // createCode("about", "Who am i and what do i do.");
  // createCode("help", "See all commands.");
  // createCode("social", "All my social networks.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/amitpal16181";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "help"){
    trueValue(value);
    
    createText("Available commands:")
    createCode("projects", "My github page with my projects. Follow me there ;)");
    createCode("about", "Who am i and what do i do.");
    createCode("social", "All my social networks.");
    createCode("clear", "Clean the terminal.");
    createCode("social -{social media}", "Open specified {social media} in a new tab.")
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("Few of my projects can be found on my github.");
    createText("<a href='https://github.com/amitpal16181' target='_blank'><i class='fab fa-github white'></i> github.com/amitpal16181</a>")
    createText("Other projects will be enlisted soon...")
  }
  else if(value === "about"){
    trueValue(value);
    createText("Hello World! ;)")
    createText("I am Amit Pal, a passionate learner with a keen eye for details and a drive for excellence.")
  }
  else if(value === "social"){
    trueValue(value);
    createText("<a href='https://github.com/amitpal16181' target='_blank'><i class='fab fa-github white'></i> github.com/amitpal16181</a>")
    createText("<a href='https://www.linkedin.com/in/amit-pal-985682183/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/amitpal16181</a>")
    createText("<a href='https://www.instagram.com/amitpal16181/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/amitpal16181</a>")
    createText("<a href='https://www.hackerrank.com/profile/amitpal16181' target='_blank'><i class='fab fa-hackerrank white'></i> hackerrank.com/profile/amitpal16181</a>")
    createText("<a href='https://leetcode.com/u/amitpal16181/' target='_blank'><i class='fab fa-leetcode white'></i> leetcode.com/u/amitpal16181/</a>")
  }
  else if(value === "social -github"){
    trueValue(value);
    window.open("https://github.com/amitpal16181")
  }
  else if(value === "social -linkedin"){
    trueValue(value);
    window.open("https://www.linkedin.com/in/amit-pal-985682183/")
  }
  else if(value === "social -instagram"){
    trueValue(value);
    window.open("https://www.instagram.com/amitpal16181/")
  }
  else if(value === "social -hackerrank"){
    trueValue(value);
    window.open("https://www.hackerrank.com/profile/amitpal16181")
  }
  else if(value === "social -leetcode"){
    trueValue(value);
    window.open("https://leetcode.com/u/amitpal16181/")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();