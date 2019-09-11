<template>
  <div class="form-container">
    <form class="form">
      <ProductPrice :price="price" />
      <ProductRating :rating="rating" />
    </form>
  </div>
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

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
}
.form {
  width: 25%;
  height: 300px;
  margin-top: 50px;
  padding: 20px;
  border: 2px #d7d7d7 solid;
}
</style>