let ItemCreator = (function(){

  function validateItemName(name) {
    return name.split(" ").join("").length >= 5;
  }

  function validateCategory(category) {
    if (category.indexOf(" ") !== -1) return false;

    return category.length >= 5 ;
  }

  function generateSKUCode(item, category) {
    return (item.split(" ").join("").slice(0, 3) + category.split(" ").join("").slice(0, 2)).toUpperCase();
  }

  return function(itemName, category, quantity) {

    this.itemName = itemName;
    this.category = category;
    this.quantity = quantity;
    this.skuCode = generateSKUCode(itemName, category);
    this.notValid = true;
    if (validateItemName(itemName) && validateCategory(category) && quantity !== undefined) {
      this.notValid = false;
    }
  }

})();


let ItemManager = {
  items: [],

  create(itemName, category, quantity ) {
    let item = new ItemCreator(itemName, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
    }
  },

  getItem(skuCode) {
    return this.items.filter((item) => item.skuCode === skuCode)[0];
  },

  update(skuCode, obj) {
    Object.assign(this.getItem(skuCode), obj);
  },

  delete(skuCode) {
    let item = this.getItem(skuCode);
    let pos = this.items.indexOf(item);
    this.items.splice(pos, 1);
  },

  list() {
    return this.items;
  },

  inStock() {
    return this.filter((item) => item.quantity > 0);
  },

  filter(callback) {
    return this.items.filter(callback);
  },

  itemsInCategory(cat) {
    return this.filter((item) => item.category === cat);
  }

}

let ReportManager = {
  init(itemManager) {
    this.items = itemManager;
    this.reporters = []
  },

  createReporter(skuCode) {
    let item = this.items.getItem(skuCode);
    return {
      
      itemInfo() {
        for (let prop in item) {
          console.log(`${prop}: ${item[prop]}`);
        }
      }
    }
  },

  reportInStock() {
    let inStock = this.items.inStock();
    console.log(inStock.map((item) => item.itemName).join(", "));
  }
}


ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
// console.log(ItemManager.items);

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
console.log(ItemManager.inStock());
// football,kitchen pot
// ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
// kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
// kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10