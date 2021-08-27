function myBind(func, context, ...args) {
  
  
  
  return function() {
    func.call(context, ...args, ...Array.from(arguments));
  }
}



function addNumbers(num1, num2) {
  //console.log(num1, num2);
  console.log(num1 + num2);
}

let newAdd = myBind(addNumbers, null, 4, );

newAdd();


