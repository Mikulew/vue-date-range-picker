<template>
  <span>{{ price }}</span>
</template>

<script>
export default {
  props: {
    price: {
      type: Number,
      required: true
    }
  }
};
</script>
