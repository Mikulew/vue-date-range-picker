<template>
  <div class="calendar-container">
    <div class="calendar-header">
      <div class="calendar-date"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: Object,
      required: false
    }
  }
};
</script>

<style scoped>
.calendar-container {
  top: 100%;
  background-color: #ffffff;
  box-shadow: 0 14px 45px rgba(0, 0, 0, 0.25), 0 10px 18px rgba(0, 0, 0, 0.22);
  z-index: 5;
}
</style>
