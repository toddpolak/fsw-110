/* Your task is to display to the user the key and key code they press.
Example of output: You've pressed the "a" key. It's key code is 65.
Wes Bos made this https://keycode.info/ for us to use as an example. */

document.body.addEventListener("keydown", e => {
    let userDisplay = `You've pressed the "${e.key}" key. It's code is ${e.keyCode}`;
    let output = document.getElementById('output');

    output.textContent = userDisplay;
});