

<template>
<!-- declarative rendering -->
  <div>{{ message }}</div>

  <!-- jika menggunakan ":" mengambil variable di option API -->
  <span :title='message'>Yomannn</span>
</template>

<script>
export default {
  data() {
    return {
      message: 'hello world',
    };
  },
};
</script>

<style>
</style>
