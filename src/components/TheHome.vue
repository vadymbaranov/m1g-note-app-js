<script>
export default {
  data() {
    let notes = []
    const jsonData = localStorage.getItem('notes') || '[]'

    try {
      notes = JSON.parse(jsonData)
    } catch (err) {
      console.log(err)
    }

    return {
      notes
    }
  },

  methods: {
    todosPreview(todos) {
      return todos.slice(0, 3)
    }
  }
}
</script>

<template>
  <div class="container">
    <h1 class="title is-1 has-text-centered">
      Create a Note

      <RouterLink :to="`/create/`">
        <i class="fa-solid fa-file-circle-plus"></i>
      </RouterLink>
    </h1>

    <div v-for="note of notes" v-bind:key="note.id" class="">


      <div class="tile is-ancestor is-justify-content-center">
        <div class="tile is-vertical is-8">
          <div class="tile is-parent">
            <section class="tile is-child notification is-primary">
              <div class="tile is-justify-content-space-between is-align-items-center">
                <h1 class="title is-1 is-large">{{ note.title }}</h1>
                
                <div class="is-justify-content-flex-end tile is-align-content-space-evenly">
                  <RouterLink :to="`/edit/:${note.id}`">
                    <i class="fa-solid fa-file-pen mr-4"></i>
                  </RouterLink>

                  <RouterLink :to="`/delete/:${note.id}`">
                    <i class="fa-solid fa-trash"></i>
                  </RouterLink>
                </div>
              </div>

              <p class="subtitle is-4" v-if="note.todos.length">
                <strong>Todo:</strong>
              </p>

              <div class="content">
                <section
                  class="box is-flex"
                  v-for="todo of todosPreview(note.todos)"
                  :key="todo.id"
                >
                  <div class="is-flex is-align-items-center" :class="{completed: todo.completed}">
                    <label class="checkbox mr-4">
                      <input type="checkbox" :checked="todo.completed"/>
                    </label>

                    <p class="subtitle is-5">{{ todo.title }}</p>
                  </div>
                </section>
              </div>
              <div v-if="note.todos.length > 3" class="columns is-centered is-size-1">...</div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
