let todos = [];

function startApp() {
  let choice;
  do {
    choice = prompt(
      "To-Do List App\n" +
      "1. Add Task\n" +
      "2. Show All Tasks\n" +
      "3. Edit Task\n" +
      "4. Delete Task\n" +
      "5. Mark Task as Completed\n" +
      "6. Show Completed Tasks\n" +
      "7. Show Incomplete Tasks\n" +
      "8. Exit\n" +
      "Enter your choice:"
    );

    switch (choice) {
      case "1":
        addTask();
        break;
      case "2":
        displayTasks(todos);
        break;
      case "3":
        editTask();
        break;
      case "4":
        deleteTask();
        break;
      case "5":
        markTaskCompleted();
        break;
      case "6":
        filterTasks(true);
        break;
      case "7":
        filterTasks(false);
        break;
      case "8":
        alert("Exiting To-Do App.");
        break;
      default:
        alert("Invalid option. Please choose from 1 to 8.");
    }
  } while (choice !== "8");
}

function addTask() {
  const title = prompt("Enter task title:");
  if (title) {
    const task = {
      title: title,
      completed: false
    };
    todos.push(task);
    alert("Task added!");
  } else {
    alert("Task title cannot be empty.");
  }
}

function displayTasks(taskArray) {
  if (taskArray.length === 0) {
    alert("No tasks available.");
    return;
  }
  let output = "Your Tasks:\n";
  taskArray.forEach((task, index) => {
    output += `${index + 1}. [${task.completed ? "✔" : " "}] ${task.title}\n`;
  });
  alert(output);
}
function editTask() {
  if (todos.length === 0) return alert("No tasks to edit.");

  const index = parseInt(prompt("Enter task number to edit:")) - 1;
  if (index >= 0 && index < todos.length) {
    const newTitle = prompt("Enter new title:");
    if (newTitle) {
      todos[index].title = newTitle;
      alert("Task updated.");
    } else {
      alert("Title cannot be empty.");
    }
  } else {
    alert("Invalid task number.");
  }
}

function deleteTask() {
  if (todos.length === 0) return alert("No tasks to delete.");

  const index = parseInt(prompt("Enter task number to delete:")) - 1;
  if (index >= 0 && index < todos.length) {
   todos.splice(index, 1);
    alert("Task deleted.");
  } else {
    alert("Invalid task number.");
  }
}

function markTaskCompleted() {
  if (todos.length === 0) return alert("No tasks to mark.");

  const index = parseInt(prompt("Enter task number to mark as completed:")) - 1;
  if (index >= 0 && index < todos.length) {
    todos[index].completed = true;
    alert("Task marked as completed.");
  } else {
    alert("Invalid task number.");
  }
}

function filterTasks(showCompleted) {
  const filtered = tasks.filter(task => task.completed === showCompleted);
  if (showCompleted) {
    displayTasks(filtered);
  } else {
    displayTasks(filtered);
  }
}

startApp();

