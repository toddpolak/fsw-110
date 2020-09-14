var box = document.getElementById('box');

with (box.style) {
    width = '300px';
    height = '300px';
    border = '1px solid black';
}

box.addEventListener('mouseover', function() {
    box.style.backgroundColor = 'blue';
})

box.addEventListener('mousedown', function() {
    box.style.backgroundColor = 'red';
})

box.addEventListener('mouseup', function() {
    box.style.backgroundColor = 'yellow';
})

box.addEventListener('dblclick', function() {
    box.style.backgroundColor = 'green';
})

window.addEventListener('wheel', function() {
    box.style.backgroundColor = 'orange';
})

document.addEventListener("keydown", function(event) {
    switch (event.key.toLowerCase()) {
        case 'b':
            box.style.backgroundColor = 'blue';
            break;
        case 'r':
            box.style.backgroundColor = 'red';
            break;
        case 'y':
            box.style.backgroundColor = 'yellow';
            break;
        case 'g':
            box.style.backgroundColor = 'green'
            break;
        case 'o':
            box.style.backgroundColor = 'orange'
            break;
    }
  })