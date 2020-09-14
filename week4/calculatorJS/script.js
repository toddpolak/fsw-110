var lblAdd = document.getElementById('lblAdd');
var lblSub = document.getElementById('lblSub');
var lblMult = document.getElementById('lblMult');
var btnAdd = document.getElementById('btnAdd');
var btnSub = document.getElementById('btnSub');
var btnMult = document.getElementById('btnMult');
var buttons = document.querySelectorAll("input[type=button]");

lblAdd.textContent = '+';
lblAdd.style.padding = '7px';
lblSub.textContent = '-';
lblSub.style.padding = '10px';
lblMult.textContent = 'x';
lblMult.style.padding = '8px';

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = 'firebrick';
        this.style.cursor = 'pointer';
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
});

btnSub.addEventListener('click', function() {
    var sub1 = document.getElementById('txtSub1');
    var sub2 = document.getElementById('txtSub2');
    var subRslt = document.getElementById('lblSubRslt')
    var invalidTxt = 'Please enter a number'

    if(!validTxt(sub1.value)) {
        subRslt.textContent = invalidTxt;
        sub1.value = '';
        sub1.focus();
    } else if(!validTxt(sub2.value)) {
        subRslt.textContent = invalidTxt;
        sub2.value = '';
        sub2.focus();
    } else {
        subRslt.textContent = 'Result: ' + (Number(sub1.value) - Number(sub2.value));
    }
});

btnMult.addEventListener('click', function() {
    var mult1 = document.getElementById('txtMult1');
    var mult2 = document.getElementById('txtMult2');
    var multRslt = document.getElementById('lblMultRslt')
    var invalidTxt = 'Please enter a number'

    if(!validTxt(mult1.value)) {
        multRslt.textContent = invalidTxt;
        mult1.value = '';
        mult1.focus();
    } else if(!validTxt(mult2.value)) {
        multRslt.textContent = invalidTxt;
        mult2.value = '';
        mult2.focus();
    } else {
        multRslt.textContent = 'Result: ' + (Number(mult1.value) * Number(mult2.value));
    }
});