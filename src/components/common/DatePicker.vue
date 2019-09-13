<template>
  <div class="datepicker-container">
    <input type="text" :value="currentText" @click="openCalender" />
    <Calendar
      :timestamp="timestamp"
      :format="format"
      @changeText="changeText"
      @submitDate="changeDate"
      @closeCalendar="closeCalender"
      :visible="isVisible"
      :text="text"
    ></Calendar>
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
      currentText: this.text,
      isVisible: false
    };
  },
  methods: {
    changeText(text) {
      return (this.currentText = text);
    },
    changeDate(timestamp) {
      this.$emit("changeDate", timestamp);
    },
    openCalender() {
      this.isVisible = true;
    },
    closeCalender() {
      this.isVisible = false;
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
