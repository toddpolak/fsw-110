var box = document.getElementById('box');

with (box.style) {
    width = '300px';
    height = '300px';
    border = '1px solid black';
}

box.addEventListener('mouseover', function() {
    box.style.backgroundColor = 'blue';
})