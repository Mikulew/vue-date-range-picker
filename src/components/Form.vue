<template>
  <form class="form">
    <ProductPrice :price="price" />
    <ProductRating :rating="rating" />
  </form>
</template>

<script>
import ProductPrice from "./product/ProductPrice";
import ProductRating from "./product/ProductRating";

export default {
  name: "Form",
  data() {
    return {
      price: 298,
      rating: {
        all: 123,
        star: 4.5
      }
    };
  },
  components: {
    ProductPrice,
    ProductRating
  }
};
</script>
