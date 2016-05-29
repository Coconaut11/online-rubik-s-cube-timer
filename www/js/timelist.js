var timelist = {
  list: new LinkedList(),

  init: function() {
    for(var i = 0; i < localStorage.getItem("timelistlength"); i++) {
      this.add(localStorage.getItem("time" + i));
    }
    console.log("loaded");
  },

  update: function() {
    this.list.update();
  },

  save: function() {
    var length = this.list.size;
    localStorage.setItem("timelistlength", length);

    for(var i = 0; i < length; i++)
      localStorage.setItem("time" + i, this.get(i));

    console.log("saved!!");
  },

  add: function(time) {
    var item = new ListItem(time);
    this.list.add(item);
    this.update();
  },

  delete: function(i) {
    this.list.delete(i);
    this.update();
  },

  get: function(i) {
    this.update();
    return this.list.getVal(i);
  }
}
