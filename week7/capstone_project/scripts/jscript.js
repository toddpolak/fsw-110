const toDoForm = document.to_do_form;

toDoForm.addEventListener("submit", e => {
    e.preventDefault()

    let toDo = toDoForm.to_do.value;
    let toDoDate = toDoForm.to_do_date.value;
    let toDoDescription = toDoForm.to_do_description.value;
    let toDoItems = document.getElementById('to_do_items');
    let newDiv = document.createElement('div');
    let spanToDo = document.createElement('span');
    let spanDate = document.createElement('span');
    let spanDelete = document.createElement('span');
    let spanDescription = document.createElement('span');
    let deleteBtn = document.createElement('button');

    newDiv.style.width = '300px';
    spanToDo.style.fontWeight = 'bold';
    spanToDo.style.padding = '10px';
    spanDelete.style.float = 'right';
    spanDescription.style.display = 'block';

    spanToDo.textContent = toDo;
    spanDate.textContent = toDoDate;
    spanDescription.textContent = toDoDescription;

    with (deleteBtn) {
        classList.add('delete_btn');
        addEventListener('click', e => {
            newDiv.remove();
        });
    }
    spanDelete.appendChild(deleteBtn);

    with (newDiv) {
        appendChild(spanDate);
        appendChild(spanToDo);
        appendChild(spanDelete);
        appendChild(spanDescription);
        
    }
    toDoItems.appendChild(newDiv);

    with (toDoForm) {
        to_do.value = '';
        to_do_date.value = '';
        to_do_description.value = '';
    }
});