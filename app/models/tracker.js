var dmp = new diff_match_patch();
var dom = []
var patches = []

function Tracker() {
};

Tracker.prototype.getDOM = function () {
  dom.push(document.documentElement.innerText);
};

Tracker.prototype.createPatch = function () {
  if (dom[0] === dom[1]) {
    console.log("DOM unchanged");
  } else {
    var diff = dmp.diff_main(dom[0], dom[1]);
    var patch = dmp.patch_make(dom[0], diff);
    patches.push(patch);
  }
};
