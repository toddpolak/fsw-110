
document.getElementsByClassName('red-box')[0].addEventListener('mousemove', mouseEvent => {
    let redBox = document.getElementsByClassName('red-box')[0];
    let left = 0;
    let top = 0;
    let x, y;

    while (redBox.offsetParent) {
        left += redBox.offsetLeft;
        top += redBox.offsetTop
        redBox = redBox.offsetParent;
    }
    
    if (mouseEvent) {
      x = mouseEvent.pageX;
      y = mouseEvent.pageY;
    } else {
      x = window.event.x + document.body.scrollLeft - 2;
      y = window.event.y + document.body.scrollTop - 2;
    }
    
    x -= left;
    y -= top;

    document.getElementsByClassName('red-box')[0].innerHTML = `${x}, ${y}`;
});