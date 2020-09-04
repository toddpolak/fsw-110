var pageHeader = document.createElement('header');
var pageNav = document.createElement('nav');
var pageMain = document.createElement('main');
var pageFooter = document.createElement('footer');
var pageUl = document.createElement('ul')
var pageH1 = document.createElement('h1');
var pageP = document.createElement('p');
var arrNavLinks = [
    ['Home', 'index.html'], 
    ['About', 'index.html'], 
    ['Contact', 'index.html'],
    ['Blog', 'index.html']
]
var arrPageLinks = [
    ['MDN Web Docs', 'https://developer.mozilla.org/en-US/'],
    ['w3Schools', 'https://www.w3schools.com/'],
    ['VSchool', 'https://coursework.vschool.io/'],
    ['Edabit', 'https://edabit.com/']
];

document.title = 'Basic Website Using JS';

for (i = 0; i < arrNavLinks.length; i++) {
    var curItem = arrNavLinks[i];
    var navLink = document.createElement('a');
    var navLinkTxt = document.createTextNode(curItem[0]);
    var navLinkSep = document.createTextNode(' | ');

    navLink.appendChild(navLinkTxt)
    navLink.href = curItem[1];
    pageNav.appendChild(navLink);
    
    if (i + 1 != arrNavLinks.length) {
        pageNav.appendChild(navLinkSep);
    }
}

document.body.append(pageNav);
pageH1.textContent = 'Create a Basic Website Using JS';
pageMain.appendChild(pageH1);
pageP.textContent = "All the elements on this page were created using only Javascript."
pageMain.appendChild(pageP);

for (i = 0; i < arrPageLinks.length; i++) {
    var curItem = arrPageLinks[i];
    var pageLink = document.createElement('a');
    var pageLinkTxt = document.createTextNode(curItem[0]);
    var newLi = document.createElement('li')

    pageLink.appendChild(pageLinkTxt);
    pageLink.href = curItem[1];
    pageLink.target = "_blank";
    newLi.appendChild(pageLink)
    pageUl.appendChild(newLi);
}

pageMain.appendChild(pageUl)
document.body.append(pageMain);
pageFooter.innerHTML = '&copy; 2020 Webdev Student';
document.body.append(pageFooter);