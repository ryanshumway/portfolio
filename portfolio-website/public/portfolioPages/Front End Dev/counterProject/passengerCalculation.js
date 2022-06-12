let increment = document.getElementById('count-el');
console.log(increment);

let passengerCount = 0;

function incrementCount() {
  passengerCount += 1;
  increment.innerText = passengerCount;
  console.log(passengerCount);
}

let saveCount = document.getElementById('save-el');

function save() {
  let countString = passengerCount;
  saveCount.textContent += passengerCount + ' - ';
  passengerCount = 0;
  increment.textContent = 0;
}
