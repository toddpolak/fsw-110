const travelForm = document.travel_form;

travelForm.addEventListener("submit", (event) => {
    event.preventDefault()
    
    let firstName = travelForm.first_name.value;
    let lastName = travelForm.last_name.value;
    let age = travelForm.age.value;
    let gender = travelForm.gender.value;
    let location = travelForm.location.value;
    let alertMsg;
    let dietRestrictions = [];

    for (let i = 0; i < travelForm.diet_restrictions.length; i++) {
        if (travelForm.diet_restrictions[i].checked) {
            dietRestrictions.push(travelForm.diet_restrictions[i].value);
        }
    }

    alertMsg = `First Name: ${firstName}\nLast Name: ${lastName}\nAge: ${age}\nGender: ${gender}\nLocation: ${location}`;

    if (dietRestrictions.length != 0) {
        alertMsg += `\nDietary Restrictions: `;
        dietRestrictions.forEach(function(item, index, array) {
            alertMsg += item;
            if (index !== array.length - 1) {
                alertMsg += ', ';
            }
        });
    }

    alert(alertMsg);
})