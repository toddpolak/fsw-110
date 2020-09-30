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
console.log(formatPhone(phoneNum));