var pageHeader = document.createElement('header');
var pageNav = document.createElement('nav');
var pageMain = document.createElement('main');
var pageFooter = document.createElement('footer');
var arrFooterLnks = [
    ['MDN Web Docs', 'https://developer.mozilla.org/en-US/'],
    ['w3Schools', 'https://www.w3schools.com/'],
    ['VSchool', 'https://coursework.vschool.io/']
];
var pageH1 = document.createElement('h1');

document.title = 'Basic Website Using JS';
pageH1.textContent = 'Create a Basic Website Using JS';

// Footer Links (loop thru array)
for (i = 0; i < arrFooterLnks.length; i++){
    var curItem = arrFooterLnks[i];
    var footerLink = document.createElement('a');
    var footerLinkTxt = document.createTextNode(curItem[0]);
    var footerLinkSpc = document.createTextNode(' | ')

    footerLink.appendChild(footerLinkTxt);
    footerLink.href = curItem[1];
    pageFooter.appendChild(footerLink);

    if (i + 1 != arrFooterLnks.length) {
        pageFooter.appendChild(footerLinkSpc);
    }
    
    //document.body.append(pageFooter);
}

pageMain.appendChild(pageH1);

document.body.append(pageMain);

document.body.append(pageFooter);

//pageFooter.textContent = '&copy; 2020 Webdev Student';
//document.body.append(pageFooter);