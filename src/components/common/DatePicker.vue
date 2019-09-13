<template>
  <div class="datepicker-container">
    <input type="text" :value="currentText" @click="openCalender" />
    <Calendar
      :timestamp="timestamp"
      :format="format"
      @changeText="changeText"
      @closeCalendar="closeCalendar"
      v-show="isOpen"
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
      isOpen: false
    };
  },
  methods: {
    changeText(text) {
      return (this.currentText = text);
    },
    openCalender() {
      this.isOpen = true;
    },
    closeCalendar(value) {
      this.isOpen = value;
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
