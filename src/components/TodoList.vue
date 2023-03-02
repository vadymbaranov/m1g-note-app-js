<script>
export default {
  props: ["todos"],

  data() {
    return {
      title,
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
      class="box"
      v-for="(todo, index) of todos"
      :key="todo.id"
    >
      <div v-if="todos.length" class="is-justify-content-space-between" :class="{ completed: todo.completed }">
        <label class="checkbox">
          <input
            type="checkbox"
            v-model="todo.completed"
          />
        </label>
        
        <span class="title is-5">{{ todo.title }}</span>
        <button type="button" class="button" @click="deleteTodo(index)">
          x
        </button>
      </div>
    </section>
  </div>
</template>
