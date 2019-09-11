<template>
  <span>{{ rating.all }}</span>
</template>

<script>
export default {
  props: {
    rating: {
      type: Object,
      required: true
    }
  }
};
</script>
