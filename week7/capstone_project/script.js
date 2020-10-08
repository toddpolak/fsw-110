const toDoForm = document.to_do_form;

toDoForm.addEventListener("submit", e => {
    e.preventDefault()

    let toDo = toDoForm.to_do.value;
    let toDoDate = toDoForm.to_do_date.value;
    let toDoDescription = toDoForm.to_do_description.value;
    let toDoList = document.getElementById('to_do_list');
    let newLi = document.createElement('li');
    let spanToDo = document.createElement('span');
    let spanDate = document.createElement('span')
    let spanDescription = document.createElement('span');
    let deleteBtn = document.createElement('button');

    spanToDo.style.display = 'block';
    spanDate.style.display = 'block';
    spanDescription.style.display = 'block';

    spanToDo.textContent = toDo;
    spanDate.textContent = toDoDate;
    spanDescription.textContent = toDoDescription;

    with (newLi) {
        appendChild(spanDate);
        appendChild(spanToDo);
        appendChild(spanDescription);
        appendChild(deleteBtn);
    }
    toDoList.appendChild(newLi);


    with (deleteBtn) {
        innerText = 'Delete';
        addEventListener('click', e => {
            newLi.remove();
        });
    }

    with (toDoForm) {
        to_do.value = '';
        to_do_date.value = '';
        to_do_description.value = '';
    }
});