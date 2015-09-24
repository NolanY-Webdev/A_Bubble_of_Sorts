function bubbleSorter(array) {
  var thingy = true;
  var i = 0;
  while (thingy) {
    thingy = false;
    var curr = array[i];
    var otherThingy = true;
    while (otherThingy) {
      if (array[i + 1] == undefined) {
        i = 0;
        otherThingy = false;
      } else if (curr == array[i + 1]) {
      } else if (curr > array[i + 1]) {
        array[i] = array[i + 1];
        array[i + 1] = curr;
        thingy = true;
      } else if (curr < array[i + 1]) {
        curr = array[i + 1];
      }
      i++;
    }
  }
  return array;
}

var newRay = [0, 1, 2, 3, 8, 4, 5];
console.log(newRay);
var sortedNewRay = bubbleSorter(newRay);
console.log(sortedNewRay);