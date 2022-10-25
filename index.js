const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "";
      
    } else {
      display.innerText += item.id;
    }
  };
});


let r = 0
let g = 238
let b = 75

function move(event){
    if(r!=255 && g==238 && b==75){
        r+=1
        document.body.style.background = "rgb("+r+" , "+g+" , "+b+")"
    }else if(r==255 && g!=0 && b==75){
        g-=1
        document.body.style.background = "rgb("+r+" , "+g+" , "+b+")"
    }else if(r==255 && g==0 && b!=255){
        b+=1
        document.body.style.background = "rgb("+r+" , "+g+" , "+b+")"
    }else if(r==255 && g==0 && b==255){
        r = 0
        g = 238
        b = 75
    }
}

window.onmousemove = move;