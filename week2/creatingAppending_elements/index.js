var newH1 = document.createElement('h1');
var newP = document.createElement('p');
var newOl = document.createElement('ol');
var arrLi = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];

document.title = "Creating/Appending Elements";
newH1.textContent = 'Welcome to my JS site';
newP.textContent = 'All of this was created with Javascript';

document.body.append(newH1);
document.body.append(newP);

for (i = 0; i < arrLi.length; i++) {
    var newLi = document.createElement('li');
    newLi.textContent = arrLi[i];
    newOl.append(newLi);
}

document.body.append(newOl);