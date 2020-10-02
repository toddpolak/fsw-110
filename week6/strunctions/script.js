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

let strAddress = '2123 Center St.'

noDigits = str => {
    return str.match(/\D+/g);
}
console.log(noDigits(strAddress));

onlyDigits = str => {
    return str.match(/\d+/g);
}
console.log(onlyDigits(strAddress));

let strName = 'todd polak zappone';

properCase = str => {
    let strAry = str.toLowerCase().split(' ');
    for (let i = 0; i < strAry.length; i++) {
        strAry[i] = strAry[i].charAt(0).toUpperCase() + strAry[i].substr(1);   
    }
   return strAry.join(' ');
}
console.log(properCase(strName));

let phoneNum1 = ('909.555.3598');
let phoneNum2 = ('909-556-2672');
let phoneNum3 = ('9095557780');

formatPhone = num => {
    let cleanNum = num.replace( /-/g, "" ).replace(/\./g, "");

    return '(' + cleanNum.slice(0, 3) + ')' 
        + cleanNum.slice(3, 6) + '-' + cleanNum.slice(6)
}
console.log(formatPhone(phoneNum1));
console.log(formatPhone(phoneNum2));
console.log(formatPhone(phoneNum3));