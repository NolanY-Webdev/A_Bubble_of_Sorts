var expect = chai.expect;

describe('bubbleSorter', function() {
  it('should be a function', function() {
    expect(bubbleSorter).to.be.a('function');
  });
  it('should return arrays', function() {
    var newRay = [0, 1, 2, 3, 8, 4, 5];
    var sortedNewRay = bubbleSorter(newRay);
    expect(newRay.length).to.equal(sortedNewRay.length);
  });
  it('should properly sort arrays', function () {
    var newRay = [0, 1, 2, 3, 8, 4, 5];
    var sortedNewRay = bubbleSorter(newRay);
    expect(sortedNewRay).to.deep.equal([0, 1, 2, 3, 4, 5, 8]);
    var dumbArray = bubbleSorter([0, 0, 1, 0, 1, 0, 0, 10, 1]);
    expect(dumbArray).to.deep.equal([0, 0, 0, 0, 0, 1, 1, 1, 10]);
    var annasArray = bubbleSorter([3.14159, 26, 64, 7]);
    expect(annasArray).to.deep.equal([3.14159, 7, 26, 64]);
  });
});