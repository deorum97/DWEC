class Task {
  constructor(title, description, priority, done = false) {
    this.id = new Date(Date.now());
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.done = done;
    this.createdAt = new Date();
  }
}

export { Task };
