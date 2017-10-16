window.onload = function () {
  tracker = new Tracker();
  tracker.getDOM();
  setTimeout(tracker.getDOM, 3000);
  setTimeout(tracker.createPatch, 3000);
}
