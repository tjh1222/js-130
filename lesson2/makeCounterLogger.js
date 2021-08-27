function makeCounterLogger(start) {
  return function(end) {
    if (start > end) {
      for (let idx = start; idx >= end; idx -= 1) {
        console.log(idx);
        
      }
    } else if (start === end) {
      console.log(start);

    } else {
      for (let idx = start; idx <= end; idx += 1) {
        console.log(idx);
      }
    }

  }
}

let countlog = makeCounterLogger(5);
countlog(8);

/*
5
6
7
8
*/

countlog(2);

/*
5
4
3
2

*/