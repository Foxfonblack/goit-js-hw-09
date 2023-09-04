import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const input = document.getElementById("datetime-picker")
const button = document.querySelector("[data-start]")
const days = document.querySelector("[data-days]")
const hours = document.querySelector("[data-hours]")
const minutes = document.querySelector("[data-minutes]")
const seconds = document.querySelector("[data-seconds]")

button.disabled = true

const currentDate = new Date()
let chosenDate = null;
let intervalId = null;

button.addEventListener("click", onClick)

function onClick(){
let milliseconds=null
intervalId=setInterval(()=>{
const currentDate = new Date()
milliseconds = chosenDate-currentDate
const result = convertMs(milliseconds)
days.textContent = addLeadingZero(result.days)
hours.textContent = addLeadingZero(result.hours)
minutes.textContent = addLeadingZero(result.minutes)
seconds.textContent = addLeadingZero(result.seconds) 
const total = +days.textContent+ +hours.textContent+ +minutes.textContent+ +seconds.textContent
console.log(total);
if(total === 0){
    clearInterval(intervalId)
}
},1000)

}


function addLeadingZero(value){
  return  value.toString().padStart(2,0)
}

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      chosenDate=selectedDates[0]
      console.log(chosenDate);
      if (currentDate>chosenDate){
        button.disabled = true
Notiflix.Notify.failure('Please choose a date in the future')}
        else if (chosenDate>currentDate){button.disabled = false}
        
    },
  };
flatpickr(input, options)





function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  