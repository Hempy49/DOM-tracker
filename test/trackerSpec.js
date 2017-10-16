describe("Tracker", function() {

  var tracker;

  beforeEach(function() {
    tracker = new Tracker();
  });

  describe('getDOM', function () {
    it('saves inner text of DOM in array', function () {
      tracker.getDOM();
      expect(dom[0]).toContain('2.6.4');
    });
  });

  beforeEach(function(){
    jasmine.clock().install();
  });
  afterEach(function(){
    jasmine.clock().uninstall();
  });

  describe('createPatch', function () {
    it('generates a list of patches for different states of DOM', function () {
      function changeDom() { document.getElementById("test").click() };
      setTimeout(changeDom, 1000);
      setTimeout(tracker.getDOM, 2000);
      setTimeout(tracker.createPatch, 3000);
      jasmine.clock().tick(3001);
      expect(patches).toContain(jasmine.arrayContaining([]));
    });
  });
});
