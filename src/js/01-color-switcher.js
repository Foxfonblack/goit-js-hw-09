const buttonStart = document.querySelector('[data-start]')
console.log(buttonStart);
const buttonStop = document.querySelector('[data-stop]')
console.log(buttonStop);

buttonStart.addEventListener('click', onStartClick)
buttonStop.addEventListener('click', onStopClick)

let id = null;
function onStartClick(){
    id = setInterval(()=>{
     document.body.style.backgroundColor=getRandomHexColor()
   
    },1000)
    buttonStart.disabled = true;
}

function onStopClick(){
clearInterval(id)
buttonStart.disabled = false;
}
 







function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


