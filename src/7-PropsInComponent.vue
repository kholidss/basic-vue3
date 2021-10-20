<template>
  <child-component text="test props" />
  <child-component :text="message" />
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

  data() {
    return {
      message: "hello bro",
    };
  },
};
</script>

<style></style>
