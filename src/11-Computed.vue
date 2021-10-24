<template>
  <div>{{ total }}</div>

  <input v-model="num1" type="number" />
  <input v-model="num2" type="number" />

  <div>{{ text }}</div>
  <button @click="change">Change</button>
</template>
<script>
export default {
  data() {
    return {
      num1: 0,
      num2: 0,
    };
  },

  computed: {
    total() {
      return parseInt(this.num1) + parseInt(this.num2);
    },
  },
};
</script>

<style></style>
