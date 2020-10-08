const toDoForm = document.to_do_form;

toDoForm.addEventListener("submit", e => {
    e.preventDefault()

    let toDoTask = toDoForm.to_do_task.value;
    let toDoDate = toDoForm.to_do_date.value;
    let toDoDescription = toDoForm.to_do_description.value;
    let toDoList = document.getElementById('to_do_list');
    let newLi = document.createElement('li');
    let spanTask = document.createElement('span');
    let spanDate = document.createElement('span')
    let spanDescription = document.createElement('span');
    let deleteBtn = document.createElement('button');

    spanTask.textContent = toDoTask;
    spanDate.textContent = toDoDate;
    spanDescription.textContent = toDoDescription;

    newLi.appendChild(spanTask);
    newLi.appendChild(spanDate);
    newLi.appendChild(spanDescription);
    newLi.appendChild(deleteBtn);
    toDoList.appendChild(newLi);

    with (deleteBtn) {
        innerText = 'Remove';
        addEventListener('click', e => {
            newLi.remove();
        });
    }
});