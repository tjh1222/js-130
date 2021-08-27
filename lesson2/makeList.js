function makeList() {
  let list = [];

  function isEmpty(list) {
    return list.length === 0;
  }

  function alreadyExists(item, list) {
    return list.some((el) => el === item);
  }

  function displayList() {
    if (list.length === 0) {
      console.log("The list is empty!");
    } else {
      list.forEach((item) => console.log(item));
    }
  }

  function removeItem(item) {
    let idx = list.indexOf(item);
    list.splice(idx, 1);
    console.log(`${item} removed`);
  }

  function addItem(item) {
    list.push(item);
    console.log(`${item} added.`);
  }

  return {
      list: displayList,
      remove: removeItem,
      add: addItem
    };
}


let list = makeList();
list.add("make bed");
list.add("clean kitchen");
list.remove("make bed");
list.list();

// list("make bed");

// list("brush teeth");
// list();