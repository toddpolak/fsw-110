// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function

const form = document.getElementById('submit-me');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let nameInput = document.getElementById('name');
    nameInput.setAttribute('name', 'user_name');
    nameInput.setAttribute('id', 'first_name');

    let ageInput = document.getElementById('age');
    ageInput.setAttribute('type', 'number');
});