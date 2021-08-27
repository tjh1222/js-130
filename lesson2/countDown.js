function countDown(start) {
  let count = start;
  return (function nextCount() {
    console.log(count);
    if (count !== 0) {
      count -= 1;
      nextCount();
    }
  })()
}

countDown(7);