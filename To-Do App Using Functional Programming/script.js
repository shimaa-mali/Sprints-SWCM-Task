let tasks = [];

// Pure functions
const addTask = (taskText, taskList) => 
  [...taskList, { id: Date.now(), text: taskText, completed: false }];

const removeTask = (id, taskList) => 
  taskList.filter(task => task.id !== id);

const toggleTask = (id, taskList) => 
  taskList.map(task => 
    task.id === id 
      ? { ...task, completed: !task.completed } 
      : task
  );

// Recursively render tasks
const renderTasks = (taskList, parent) => {
  parent.innerHTML = '';
  const render = (index) => {
    if (index >= taskList.length) return;
    const task = taskList[index];
    const li = document.createElement('li');
    li.textContent = task.text;
    if (task.completed) li.style.textDecoration = 'line-through';

    li.onclick = () => {
      tasks = toggleTask(task.id, tasks);
      updateUI();
    };

    const delBtn = document.createElement('button');
    delBtn.textContent = '❌';
    delBtn.onclick = (e) => {
      e.stopPropagation();
      tasks = removeTask(task.id, tasks);
      updateUI();
    };

    li.appendChild(delBtn);
    parent.appendChild(li);

    render(index + 1);
  };
  render(0);
};

// Display task summary with reduce
const renderSummary = (taskList, summaryElement) => {
  const summary = taskList.reduce(
    (acc, task) => {
      acc.total += 1;
      if (task.completed) acc.completed += 1;
      return acc;
    },
    { total: 0, completed: 0 }
  );
  summaryElement.textContent = `Total: ${summary.total}, Completed: ${summary.completed}`;
};

const updateUI = () => {
  const taskListEl = document.getElementById('taskList');
  const summaryEl = document.getElementById('summary');
  renderTasks(tasks, taskListEl);
  renderSummary(tasks, summaryEl);
};

// DOM Interaction
document.getElementById('addTask').addEventListener('click', () => {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (text !== '') {
    tasks = addTask(text, tasks);
    input.value = '';
    updateUI();
  }
});


