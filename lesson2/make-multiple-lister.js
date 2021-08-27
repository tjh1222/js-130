function makeMultipleLister(factor) {
  return function() {
    let multiple = factor;
    while (multiple < 100) {
      console.log(multiple);
      multiple = multiple + factor;

    }
  }
} 

let lister = makeMultipleLister(17);
lister();