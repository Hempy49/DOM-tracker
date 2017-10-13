function Tracker() {
  this.dom = [];
};

Tracker.prototype.getDOM = function () {
  var doc = document.documentElement.innerText;
  this.dom.push(doc);
};
