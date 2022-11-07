const addNumber = document.querySelector('.number')
const buttonPlus = document.getElementById('plus') 
const buttonMinus = document.getElementById('minus')
let sum = 0

addNumber.innerHTML = sum
buttonPlus.addEventListener('click',() => plus())
buttonMinus.addEventListener('click',() => minus())  


function plus (number = 1){
  
   sum += number
   return addNumber.innerHTML = sum
}

function minus (number = 1){
  sum -= number
  return addNumber.innerHTML = sum 
}

