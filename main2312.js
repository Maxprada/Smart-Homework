function addTask() {
    var task = document.getElementById('taskInput').value;
    var description = document.getElementById('descriptionInput').value;

    if (task === '' || description === '') {
        alert('Please enter both task and description.');
        return;
    }

    var taskItem = document.createElement('li');
    taskItem.innerHTML = '<strong>' + task + ':</strong> ' + description;

    document.getElementById('taskList').appendChild(taskItem);

    document.getElementById('taskInput').value = '';
    document.getElementById('descriptionInput').value = '';
}