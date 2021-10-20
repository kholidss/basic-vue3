<template>
  <child-component />
  <list-component />
</template>

<script>
import ChildComponent from "./components/ChildComponent.vue";
import ListComponent from "./components/ListComponent.vue";
export default {
  components: {
    "child-component": ChildComponent,
    "list-component": ListComponent,
  },
};
</script>

<style></style>
