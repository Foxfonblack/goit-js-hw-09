import Notiflix from 'notiflix';

const form = document.forms[0]

form.addEventListener("submit", onSubmit)

function onSubmit(evt){
  evt.preventDefault()
  let firstDelay = Number(evt.currentTarget.elements.delay.value)
  const delayStep = Number(evt.currentTarget.elements.step.value)
  const amount = Number(evt.currentTarget.elements.amount.value)
  

  for (let i=1; i<=amount; i+=1){
    createPromise(i,firstDelay)
    firstDelay+=delayStep
    
  }

}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
return new Promise((resolve, reject)=>{
  setTimeout(()=>{
    if (shouldResolve){
      resolve({position, delay})
    }
    else{
      reject({position, delay})
    }
  },delay)
}).then(({position, delay})=>{
Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
}).catch(({position, delay})=>{
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
})
}