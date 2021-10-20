<template>
  <div>This is child component</div>
  <div>{{ text }}</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>
