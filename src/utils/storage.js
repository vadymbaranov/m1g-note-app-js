export const client = {
  get: () => JSON.parse(localStorage.getItem('todos') || '[]'),
  post: (data) => {
    const todos = client.get();

    localStorage.setItem('todos', JSON.stringify([...todos, data]));
  },
  patch: (id, newData) => {
    const todos = client.get();

    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        const changedTodo = {
          ...todo,
          completed: newData.completed,
        };

        return changedTodo;
      }

      return todo;
    });

    localStorage.setItem('todos', JSON.stringify(newTodos));
  },
  delete: (id) => {
    const todos = client.get();

    const newArrayOfevents = todos.filter(
      (todo) => todo.id !== id,
    );

    localStorage.setItem('events', JSON.stringify(newArrayOfevents));
  },
};
