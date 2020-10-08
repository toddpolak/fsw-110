const toDoForm = document.to_do_form;

toDoForm.addEventListener("submit", e => {
    e.preventDefault()

    let toDoItem = toDoForm.to_do_item.value;
    let toDoDate = toDoForm.to_do_date.value;
    let toDoDescription = toDoForm.to_do_description.value;
    let toDoList = document.getElementById('to_do_list');
    let newLi = document.createElement('li');
    let spanItem = document.createElement('span');
    let spanDate = document.createElement('span')
    let spanDescription = document.createElement('span');
    let deleteBtn = document.createElement('button');

    spanItem.textContent = toDoItem;
    spanDate.textContent = toDoDate;
    spanDescription.textContent = toDoDescription;

    with (newLi) {
        appendChild(spanItem);
        appendChild(spanDate);
        appendChild(spanDescription);
        appendChild(deleteBtn);
    }
    toDoList.appendChild(newLi);

    with (deleteBtn) {
        innerText = 'Remove';
        addEventListener('click', e => {
            newLi.remove();
        });
    }

    with (toDoForm) {
        to_do_item.value = '';
        to_do_date.value = '';
        to_do_description.value = '';
    }
});