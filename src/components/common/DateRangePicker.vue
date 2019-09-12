<template>
  <div class="datepicker-container">
    <DatePicker :timestamp="timestamp" name="start"></DatePicker>
    <DatePicker name="end"></DatePicker>
  </div>
</template>

<script>
import DatePicker from "./DatePicker";

export default {
  props: {
    timestamp: {
      type: Number,
      required: true
    }
  },
  components: {
    DatePicker
  }
};
</script>

<style>
.daterangepicker-container {
  display: flex;
}
</style>
