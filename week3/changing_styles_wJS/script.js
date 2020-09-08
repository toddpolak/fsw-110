document.title = 'Changing Styles/Classes Using JS';

var arrH2 = ['Heading1', 'Heading2', 'Heading3', 'Heading4', 'Heading5'];

for (i = 0; i < arrH2.length; i++) {
    var h2Tag = document.createElement('h2');

    h2Tag.textContent = arrH2[i];

    with (h2Tag.style) {
        fontSize = '20px';
        fontWeight = 'lighter';
        fontFamily = 'sans-serif';
        color = 'cornflowerblue';
    }

    h2Tag.classList.add('border');
    document.body.append(h2Tag);
}