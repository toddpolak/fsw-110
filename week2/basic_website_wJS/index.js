var pageHeader = document.createElement('header');
var pageNav = document.createElement('nav');
var pageMain = document.createElement('main');
var pageFooter = document.createElement('footer');
var pageUl = document.createElement('ul')
var arrPageLinks = [
    ['MDN Web Docs', 'https://developer.mozilla.org/en-US/'],
    ['w3Schools', 'https://www.w3schools.com/'],
    ['VSchool', 'https://coursework.vschool.io/']
];
var pageH1 = document.createElement('h1');

document.title = 'Basic Website Using JS';
pageH1.textContent = 'Create a Basic Website Using JS';
pageMain.appendChild(pageH1);

// Page Links (loop thru array)
for (i = 0; i < arrPageLinks.length; i++){
    var curItem = arrPageLinks[i];
    var pageLink = document.createElement('a');
    var pageLinkTxt = document.createTextNode(curItem[0]);
    var newLi = document.createElement('li')

    pageLink.appendChild(pageLinkTxt);
    pageLink.href = curItem[1];
    newLi.appendChild(pageLink)
    pageUl.appendChild(newLi);
}

pageMain.appendChild(pageUl)
document.body.append(pageMain);
pageFooter.innerHTML = '&copy; 2020 Webdev Student';
document.body.append(pageFooter);