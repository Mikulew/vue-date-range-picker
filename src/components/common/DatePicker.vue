<template>
  <div class="datepicker-container">
    <input type="text" :value="text" />
    <Calendar></Calendar>
  </div>
</template>

<script>
import Calendar from "./Calendar";
import moment from "moment";

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
}
</style>
