<template>
  <div class="form-container">
    <form class="form">
      <ProductPrice :price="price" />
      <ProductRating :rating="rating" />
      <DateRangePicker :timestamp="dateFromNow"></DateRangePicker>
    </form>
  </div>
</template>

<script>
import ProductPrice from "../components/product/ProductPrice";
import ProductRating from "../components/product/ProductRating";
import DateRangePicker from "../components/common/DateRangePicker";

export default {
  name: "Form",
  data() {
    return {
      price: 298,
      rating: {
        all: 123,
        stars: 4.5
      }
    };
  },
  computed: {
    dateFromNow() {
      return Date.now() / 1000;
    }
  },
  components: {
    ProductPrice,
    ProductRating,
    DateRangePicker
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
  width: 40%;
  height: 300px;
  margin-top: 50px;
  padding: 20px;
  border: 2px #d7d7d7 solid;
}
</style>
