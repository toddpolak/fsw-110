document.title = 'Turn an Array into a Visual List';

var newH1Tag = document.createElement('h1');

newH1Tag.textContent = "Hello World";
document.body.append(newH1Tag);

for(i = 0; i < 10; i++) {
    var h1Tag = document.createElement('h1');

    h1Tag.textContent = 'Hello World';

    with (h1Tag.style) {
        color = 'purple';
        fontFamily = 'cursive';
        fontStyle = 'italic';
        fontSize = '1em';
        textTransform = 'uppercase'; 
    }
    document.body.append(h1Tag);
}

var arrNames = ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily'];
var oList = document.createElement('ol');

for (i = 0; i < arrNames.length; i++) {
    var newLi = document.createElement('li');
    newLi.textContent = arrNames[i];
    oList.appendChild(newLi);
}

with (oList.style) {
    color = 'red';
    fontSize = '2em';
}
document.body.append(oList);