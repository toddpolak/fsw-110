/*
.concat()
.indexOf()
.lastIndexOf()
.match()
.replace()
.slice()
.split()
.toLowerCase()
.toUpperCase()
.substr()
*/

function formatPhone(num) {
    return '(' + num.slice(0, 3) + ')' 
        + num.slice(3, 6) + '-' + num.slice(6)
}
let phoneNum = '9095553598'
//console.log(formatPhone(phoneNum));

function properCase(str) {
    let strAry = str.toLowerCase().split(' ');
    for (var i = 0; i < strAry.length; i++) {
        strAry[i] = strAry[i].charAt(0).toUpperCase() + strAry[i].substr(1);   
    }
   return strAry.join(' ');
}

let strName = 'todd polak zappone';
console.log(properCase(strName));