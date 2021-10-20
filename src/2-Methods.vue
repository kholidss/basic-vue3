

<template>
<!-- declarative rendering -->
  <div>{{ count }}</div>

  <button @click='count++'>Add 1</button>

  <!-- method digunakan untuk menghandle sebuah aksi dari inputan user -->
  <button @click='addCount'>Add 2</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    addCount() {
      this.count += 2;
    }
  }
};
</script>

<style>
</style>
