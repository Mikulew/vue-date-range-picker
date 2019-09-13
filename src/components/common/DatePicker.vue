<template>
  <div class="datepicker-container">
    <input type="text" :value="currentText" />
    <Calendar :timestamp="timestamp" :format="format" @changeText="changeText"></Calendar>
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
  data() {
    return {
      currentText: this.text
    };
  },
  methods: {
    changeText(text) {
      return (this.currentText = text);
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
