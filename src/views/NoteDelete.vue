<script>
export default {
  data() {
    let notes = [];
    const jsonData = localStorage.getItem('notes') || '[]';

    try {
      notes = JSON.parse(jsonData);
    } catch(err) {
      console.log(err);
    }

    return {
      selectedNote: notes.find((item) => item.id === +this.$route.params.id.slice(1)),
      notes,
      warning: false,
    };
  },

  methods: {
    deleteNote() {
      localStorage.setItem(
        'notes',
        JSON.stringify(
          this.notes.filter((item) => item.id !== this.selectedNote.id)
        )
      );
    },
  },
};
</script>

<template>
  <div className="modal is-active">
    <div className="modal-background"></div>

    <div class="modal-card">
      <header class="modal-card-head">
        <h1 class="modal-card-title title is-3 has-text-centered">Are you sure?</h1>
      </header>

      <section class="modal-card-body has-text-centered">
        <p class="subtitle is-4">This will delete the note with all of its todos!</p>
        <RouterLink to="/">
          <button class="button is-danger is-outlined" @click="deleteNote()">
            Delete
          </button>
        </RouterLink>
      </section>

      <button class="button is-warning" @click="this.$router.go(-1)">Cancel</button>
    </div>
  </div>
</template>
