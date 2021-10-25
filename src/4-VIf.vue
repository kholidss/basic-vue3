<template>
  <div v-if="status">IT SHOW</div>

  <button @click="setStatus">TOGGLE</button>

  <div v-if="status">true</div>
  <div v-else-if="status2">false</div>
  <div v-else>xxxx</div>
</template>

<script>
export default {
  data() {
    return {
      status: true,
      status2: false,
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
