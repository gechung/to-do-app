function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = 'checkbox';

    let minusBtn = document.createElement('button');
    minusBtn.innerHTML = '<span>Delete</span>';

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // listener for minus button to be clicked when removing item
    newLi.appendChild(minusBtn);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';

  minusBtn.addEventListener('click', function() {
    newLi.parentNode.removeChild (newLi);
  })
  console.log (title);
});

};

window.onload = function() {
  onReady();
};
