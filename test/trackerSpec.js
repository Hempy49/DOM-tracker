describe("Tracker", function() {

  var tracker;

  beforeEach(function() {
    tracker = new Tracker();
  });

  describe('getDOM', function () {
    it('saves inner text of DOM in array', function () {
      tracker.getDOM();
      expect(tracker.dom[0]).toContain('2.6.4');
    });
  });
});
