class commandTask {
  createTask(id, title, description, priority, done) {
    return new Task(id, title, description, priority, done);
  }
  deleteTask(id) {}
}
