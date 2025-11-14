class TareaStrategy {
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  filter(array, data) {
    return this.strategy.filter(array, data);
  }
}

class FilterTaskPriority {
  filter(array, data) {
    const res = array.filter((t) => t.priority === data);
    return res;
  }
}

export { TareaStrategy, FilterTaskPriority };
