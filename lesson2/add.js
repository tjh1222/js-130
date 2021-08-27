let total = 0;

function add(operand) {
  total += operand;
  return total;
}

function subtract(operand) {
  total -= operand;
  return total;
}


console.log(add(1));       // 1
console.log(add(42));      // 43
console.log(subtract(39)); // 4
console.log(add(6));       // 10