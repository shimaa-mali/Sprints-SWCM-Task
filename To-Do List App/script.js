let todos = [];

function showTasks() {
  if (todos.length === 0) {
    alert("No tasks available.");
    return;
  }

  let msg = " Current To-Do List:\n\n";
  todos.forEach((task, index) => {
    msg += `${index + 1}. ${task.title} - ${task.description} [${task.completed ? " Done" : " Not done"}]\n`;
  });
  alert(msg);
}

function addTask() {
  const title = prompt("Enter task title:");
  if (!title) return alert("Title is required.");

  const description = prompt("Enter task description:") || "";
  const task = { title, description, completed: false };

  todos.push(task);
  alert("Task added!");
}

function deleteTask() {
  if (todos.length === 0) return alert("No tasks to delete.");
  showTasks();

  const index = parseInt(prompt("Enter task number to delete:")) - 1;
  if (isNaN(index) || index < 0 || index >= todos.length) return alert("Invalid task number.");


  todos.splice(index, 1);
  alert("Task deleted.");
}

function editTask() {
  if (todos.length === 0) return alert("No tasks to edit.");
  showTasks();

  const index = parseInt(prompt("Enter task number to edit:")) - 1;
  if (isNaN(index) || index < 0 || index >= todos.length) return alert("Invalid task number.");

  const newTitle = prompt("New title:", todos[index].title);
  const newDesc = prompt("New description:", todos[index].description);
  const isDone = confirm("Mark as completed?");

  todos = todos.map((task, i) => {
    if (i === index) {
      return {
        title: newTitle || task.title,
        description: newDesc || task.description,
        completed: isDone
      };
    }
    return task;
  });

  alert("Task updated.");
}

function menu() {
  let run = true;

  while (run) {
    const choice = prompt(
      " TO-DO MENU\n\n" +
      "1. Show Tasks\n" +
      "2. Add Task\n" +
      "3. Edit Task\n" +
      "4. Delete Task\n" +
      "5. Exit\n\n" +
      "Choose (1–5):"
    );

    switch (choice) {
      case "1":
        showTasks();
        break;
      case "2":
        addTask();
        break;
      case "3":
        editTask();
        break;
      case "4":
        deleteTask();
        break;
      case "5":
        run = false;
        alert("finish");
        break;
      default:
        alert("Invalid option. Choose 1 to 5.");
    }
  }
}

menu();



