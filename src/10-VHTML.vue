<template>
  <!-- menggunakan v-once akan dirender sekali, jika ada perubahan tidak akan ikut di render -->
  <div v-html="message"></div>
</template>
<script>
export default {
  data() {
    return {
      message: "<span style='color: blue'>Blue</span>",
    };
  },
};
</script>

<style></style>
