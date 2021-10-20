<template>
  <ol>
    <li v-for="(todo, index) in todos" :key="todo.id">
      {{ todo.activity }} - {{ index }}
    </li>
  </ol>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        { id: 1, activity: "Masak" },
        { id: 2, activity: "Memanggang" },
        { id: 3, activity: "Mencuci" },
      ],
    };
  },

  methods: {
    setStatus() {
      this.status = !this.status;
    },
  },
};
</script>

<style></style>
