class Task {
  constructor(
    title,
    description,
    priority,
    createdAt = new Date(Date.now()),
    id = new Date(Date.now()),
    done = false
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.done = done;
    this.createdAt = createdAt;
  }
}

export { Task };
