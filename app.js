function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');

  if (taskInput.value.trim() !== ' ') {
    var li = document.createElement('li');
    var label = document.createElement('label');
    label.textContent = taskInput.value;
    var editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.style.display = 'none';

    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function () {
      label.style.display = 'none';
      editInput.style.display = 'inline';
      saveButton.style.display = 'inline';
      editButton.style.display = 'none';
      editInput.value = label.textContent;
      editInput.focus();

      if (editedText !== null && editedText.trim() !== ' ') {
        label.textContent = editedText;
      }
    });

    var saveButton = document.createElement('button');
    saveButton.textContent = 'save';
    saveButton.style.display = 'none';
    saveButton.addEventListener('click', function () {
      label.textContent = editInput.value;
      label.style.display = 'inline';
      editInput.style.display = 'none';
      saveButton.style.display = 'none';
      editButton.style.display = 'inline';
    });

    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function () {
      taskList.removeChild(li);
    });
    li.appendChild(label);
    li.appendChild(editButton);
    li.appendChild(removeButton);
    li.appendChild(editInput);
    li.appendChild(saveButton);

    taskList.appendChild(li);
    taskInput.value = '';
  }
}
