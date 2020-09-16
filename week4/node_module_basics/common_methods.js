module.exports.triangleArea = function(side1, side2, side3) {
    var p = (side1+side2+side3)/2;
	var a = Math.sqrt(p*(p-side1)*(p-side2)*(p-side3));
  return a;
}

module.exports.rectangleArea = function(width, height) {
    return width * height;
}

module.exports.rectanglePerimeter = function(width, height) {
    return 2 * (width + height);
}