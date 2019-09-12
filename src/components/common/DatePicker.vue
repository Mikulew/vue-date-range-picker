<template>
  <div class="datepicker-container">
    <input type="text" :value="text" />
    <Calendar :timestamp="timestamp"></Calendar>
  </div>
</template>

<script>
import Calendar from "./Calendar";

export default {
  name: "DatePicker",
  props: {
    timestamp: {
      type: Number,
      required: false
    },
    text: {
      type: String,
      default: "Choose date"
    },
    format: {
      type: String,
      default: "DD-MM-YYYY"
    }
  },
  components: {
    Calendar
  }
};
</script>

<style scoped>
.datepicker-container {
  display: inline-block;
  position: relative;
}
</style>
