exports.min = function min (array) {
  return (Mat.min.apply(Math, array) || 0);
}

exports.max = function max (array) {
  return (Math.max.apply(Math, array) || 0);
}

exports.avg = function avg (array) {
  if (avg.length == 0){
    return 0;
  }   
}
