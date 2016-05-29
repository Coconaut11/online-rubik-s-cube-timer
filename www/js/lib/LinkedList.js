//LinkedList Class
function LinkedList() {
  this.list = [];
}

LinkedList.prototype.update = function () {
  var newList = [];
  for(var i = 0; i < this.list.length; i++) {
    if(this.list[i].deleted) continue;
    newList.push(this.list[i]);
  }
  this.fillWith(newList);
};

LinkedList.prototype.fillWith = function(arr) {
  this.clear();
  for(var i = 0; i < arr.length; i++) {
    this.list.push(arr[i]);
  }
}

LinkedList.prototype.clear = function () {
  this.list = [];
};

LinkedList.prototype.add = function (item) {
  if(!(item instanceof ListItem)) return;
  this.list.push(item);
};

LinkedList.prototype.delete = function (indx) {
  this.list[indx].deleted = true;
};

LinkedList.prototype.get = function (indx) {
  return this.list[indx];
};

LinkedList.prototype.getVal = function (indx) {
  return this.list[indx].value;
};

LinkedList.prototype.size = function () {
  return this.list.length;
};

//Item Class
function ListItem(value) {
  this.value = value;
  this.deleted = false;
}
