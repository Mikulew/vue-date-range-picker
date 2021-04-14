<template>
  <div class="datepicker-container">
    <button class="datepicker-button" @click.prevent="openCalendar">
      {{ currentText }}
    </button>
    <Calendar
      :timestamp="timestamp"
      :format="format"
      @changeText="changeText"
      @submitDate="changeDate"
      @closeCalendar="closeCalendar"
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
    openCalendar() {
      this.isVisible = true;
    },
    closeCalendar() {
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
.datepicker-button {
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 70px 5px 10px;
}
.datepicker-button:hover {
  background-color: #00dbb1;
}
</style>
