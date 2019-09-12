<template>
  <div class="calendar-container">
    <div class="calendar-header">
      <div class="calendar-date">{{ headerDate }}</div>
    </div>
    <div class="calendar-week">
      <div v-for="day in days" :key="day" class="calendar-weekday">
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    timestamp: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    };
  },
  computed: {
    initDate() {
      if (!this.timestamp) {
        return moment().format();
      }

      return moment.unix(this.timestamp).format();
    },
    headerDate() {
      return moment(this.initDate).format("MMMM YYYY");
    }
  }
};
</script>

<style scoped>
.calendar-container {
  position: absolute;
  top: 100%;
  background-color: #ffffff;
  box-shadow: 0 14px 45px rgba(0, 0, 0, 0.25), 0 10px 18px rgba(0, 0, 0, 0.22);
  height: 315px;
  width: 315px;
  z-index: 5;
}
.calendar-header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00dbb1;
  padding: 10px;
  height: 30px;
}
.calendar-date {
  color: #ffffff;
  font-size: 18px;
  line-height: 18px;
}
.calendar-week {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
  padding: 20px;
}
.calendar-weekday {
  color: #cdcdcd;
}
</style>
