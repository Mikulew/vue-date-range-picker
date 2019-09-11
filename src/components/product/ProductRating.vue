<template>
  <div class="product-rating-containter">
    <ProductStars :config="config" />
    <span class="product-rating-amount">{{ rating.all }}</span>
  </div>
</template>

<script>
import ProductStars from "./ProductStars";

export default {
  props: {
    rating: {
      type: Object,
      required: true
    }
  },
  computed: {
    config() {
      return {
        rating: this.rating.stars,
        isIndicatorActive: false,
        style: {
          fullStarColor: "#35797c",
          emptyStarColor: "#bac2c5",
          starWidth: 10,
          starHeight: 10
        }
      };
    }
  },
  components: {
    ProductStars
  }
};
</script>

<style scoped>
.product-rating-containter {
  display: flex;
  align-items: center;
}
.product-rating-amount {
  font-size: 12px;
  font-weight: 700;
  margin-left: 5px;
}
</style>
