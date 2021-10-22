<template>
  <!-- menggunakan v-once akan dirender sekali, jika ada perubahan tidak akan ikut di render -->
  <div v-once>{{ message }}</div>
  <button @click="message = 'heloo jugaa'">Update</button>
</template>
<script>
export default {
  data() {
    return {
      message: "Are you OK?",
    };
  },
};
</script>

<style></style>
