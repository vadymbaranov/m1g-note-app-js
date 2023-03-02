<script>
export default {
  props: ["todos"],

  data() {
    return {
      title: '',
    };
  },

  methods: {
    deleteTodo(index) {
      // eslint-disable-next-line vue/no-mutating-props
      this.todos.splice(index, 1);
    },

    getNewId() {
      return Math.max(...this.todos.map((todo) => todo.id)) + 1;
    },

    handleSubmit() {
      // eslint-disable-next-line vue/no-mutating-props
      this.todos.push({
        id: this.getNewId(),
        completed: false,
        title: this.title,
      });

      this.title = "";
    },
  },
};
</script>

<template>
  <div class="container">
    <header class="box">
      <form @submit.prevent="handleSubmit">
        <input
          type="text"
          class="input"
          placeholder="What needs to be done?"
          v-model="title"
        />
      </form>
    </header>

    <section
      class="box is-flex is-justify-content-space-between"
      v-for="todo of todos"
      :key="todo.id"
    >
      <div v-if="todos.length" class="is-flex is-align-items-center" :class="{ completed: todo.completed }">
        <label class="checkbox mr-4">
          <input
            type="checkbox"
            :checked="todo.completed"
          />
        </label>
        
        <span class="title is-5">{{ todo.title }}</span>
      </div>

      <button type="button" class="button is-outlined todo-delete is-justify-content-right" @click="deleteTodo(index)">
          x
      </button>
    </section>
  </div>
</template>

<style scoped>
.todo-delete {
  border: none;
}
</style>
