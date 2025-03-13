// Task Manager
const taskManager = {
    tasks: [],
  
    // Add a new task
    addTask(title) {
      const newTask = {
        id: this.tasks.length + 1, // Simple ID generation
        title,
        completed: false,
      };
      this.tasks.push(newTask);
      console.log(`Task added: ${title}`);
    },
  
    // Mark a task as completed
    completeTask(id) {
      const task = this.tasks.find(task => task.id === id);
      if (task) {
        task.completed = true;
        console.log(`Task completed: ${task.title}`);
      } else {
        console.log(`Task with ID ${id} not found.`);
      }
    },
  
    // Delete a task by ID
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
      console.log(`Task with ID ${id} deleted.`);
    },
  
    // Show all tasks
    showTasks() {
      console.log("Tasks:");
      this.tasks.forEach(task => {
        console.log(`[${task.completed ? "✓" : " "}] ${task.title} (ID: ${task.id})`);
      });
    },
  
    // Filter tasks by completion status
    filterTasks(completed) {
      return this.tasks.filter(task => task.completed === completed);
    },
  };
  
  // Example Usage
  taskManager.addTask("Buy groceries");
  taskManager.addTask("Finish homework");
  taskManager.addTask("Go for a run");
  
  taskManager.showTasks();
  
  taskManager.completeTask(2); // Mark "Finish homework" as completed
  taskManager.deleteTask(3); // Delete "Go for a run"
  
  taskManager.showTasks();
  
  console.log("Completed tasks:", taskManager.filterTasks(true));
  console.log("Pending tasks:", taskManager.filterTasks(false));