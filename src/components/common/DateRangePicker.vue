<template>
  <div class="datepicker-container">
    <DatePicker :timestamp="timestamp" text="Check In" name="start"></DatePicker>
    <!-- <DatePicker name="end" text="Check Out"></DatePicker> -->
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
