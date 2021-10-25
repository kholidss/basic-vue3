<template>
  <div>{{ discount }}</div>

  <input type="text" v-model="num1" />
  <input type="text" v-model="num2" />

  <button @click="addDiscount">+ Discount</button>
</template>
<script>
// flownya adalah div discount ambil dari computed, get dulu sesuai num1 dan num2
// ketika di klik addDiscount akan dilakukan mutasi, discountnya diganti 500
export default {
  data() {
    return {
      num1: 0,
      num2: 0,
    };
  },

  computed: {
    discount: {
      get() {
        return parseInt(this.num1) + parseInt(this.num2);
      },
      set(value) {
        //set tidak perlu return
        this.num1 -= value;
        this.num2 -= value;
      },
    },
  },

  methods: {
    addDiscount() {
      this.discount = 500;
    },
  },
};
</script>

<style></style>
