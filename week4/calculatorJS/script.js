var btnAdd = document.getElementById('btnAdd');
var btnSub = document.getElementById('btnSub');
var btnMult = document.getElementById('btnMult');
var buttons = document.querySelectorAll("input[type=button]");

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = 'firebrick';
    });
    buttons[i].addEventListener('mouseout', function() {
        this.style.backgroundColor = 'black';
    });
}

function validTxt(txt) {
    if (isNaN(txt) || txt.trim() == '') {
        return false;
    } else {
        return true;
    }
}

btnAdd.addEventListener('click', function() {
    var add1 = document.getElementById('txtAdd1');
    var add2 = document.getElementById('txtAdd2');
    var addRslt = document.getElementById('lblAddRslt')
    var invalidTxt = 'Please enter a number'

    if(!validTxt(add1.value)) {
        addRslt.textContent = invalidTxt;
        add1.value = '';
        add1.focus();
    } else if(!validTxt(add2.value)) {
        addRslt.textContent = invalidTxt;
        add2.value = '';
        add2.focus();
    } else {
        addRslt.textContent = 'Result: ' + (Number(add1.value) + Number(add2.value));
    }
})