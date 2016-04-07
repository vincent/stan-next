var stan   = require('./index');
var assert = require('assert');

describe('#next()', function () {
  this.timeout(10000);

  it('should return a stop time', function (done) {
    stan.next('16', 'Commanderie', 1, function (error, time) {
      assert(! error);
      assert(!! time);
      done();
    });
  });
});
