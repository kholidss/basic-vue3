<template>
  <loop-component v-for="todo in todos" :key="todo" :text="todo" />
</template>
<script>
import LoopComponentVue from "./components/LoopComponent.vue";
export default {
  components: {
    "loop-component": LoopComponentVue,
  },

  data() {
    return {
      todos: ["pertama", "kedua", "ketiga"],
    };
  },
};
</script>

<style></style>
