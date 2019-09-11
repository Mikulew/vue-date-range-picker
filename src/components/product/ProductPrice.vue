<template>
  <p class="price">{{ price | currency }}</p>
</template>

<script>
export default {
  props: {
    price: {
      type: Number,
      required: true
    }
  },
  filters: {
    currency(value) {
      return `${value} zł`;
    }
  }
};
</script>

<style scoped>
.price {
  font-size: 20px;
  font-weight: 799;
  margin: 0;
}
</style>
