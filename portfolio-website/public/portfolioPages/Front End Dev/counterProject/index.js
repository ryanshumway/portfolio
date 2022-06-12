const smartNumber = document.getElementById('number');
let counterNumber = 0;

function resetNumber() {
  counterNumber = 0;
  smartNumber.textContent = counterNumber;
}

function increaseNumber() {
  let increaseCount = (counterNumber += 1);
  smartNumber.textContent = counterNumber;
}

function decreaseNumber() {
  let minusCount = (counterNumber = counterNumber - 1);
  smartNumber.textContent = counterNumber;
}

function countColorChanger() {
  if (counterNumber > 0) {
    counterNumber.style.color = 'green';
  } else if (counterNumber < 0) {
    counterNumber.style.color = 'red';
  } else {
    counterNumber.style.color = 'black';
  }
}
