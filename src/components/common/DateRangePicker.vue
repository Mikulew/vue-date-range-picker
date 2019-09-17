<template>
  <div>
    <p class="daterangepicker-title">Dates</p>
    <div class="daterangepicker-container">
      <DatePicker :timestamp="timestamp" text="Check In" name="start"></DatePicker>
      <img
        class="datarangepicker-icon"
        src="../../assets/arrow-pointing-to-right.svg"
        alt="Arrow pointing to right"
      />
      <DatePicker name="end" text="Check Out"></DatePicker>
    </div>
  </div>
</template>

<script>
import DatePicker from "./DatePicker";

export default {
  props: {
    timestamp: {
      type: Number,
      required: false
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
  justify-content: space-between;
  border: 2px #d7d7d7 solid;
  padding: 10px;
}
.daterangepicker-title {
  font-size: 12px;
  font-weight: 700;
  margin: 15px 0 5px 0;
  padding-top: 20px;
  border-top: 2px #d7d7d7 solid;
}
.datarangepicker-icon {
  width: 20px;
  height: auto;
}
</style>
