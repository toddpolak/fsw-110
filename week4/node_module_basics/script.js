var commonMethods = require('./common_methods.js');

var tSide1 = 12;
var tSide2 = 8;
var tSide3 = 8;
var width = 100;
var height = 50;

console.log('Area of Triangle: ' 
    + commonMethods.triangleArea(tSide1, tSide2, tSide3));

console.log('Area of Rectangle: '
    + commonMethods.rectangleArea(width, height));

console.log('Perimeter of Rectangle: '
    + commonMethods.rectanglePerimeter(width, height));