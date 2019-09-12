<template>
  <div class="datepicker-container">
    <input type="text" :value="dateInputFormatted" />
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
    format: {
      type: String,
      default: "DD-MM-YYYY"
    }
  },
  computed: {
    dateInputFormatted() {
      if (!this.timestamp) {
        return "Choose date";
      }
      return moment.unix(this.timestamp).format(this.format);
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
