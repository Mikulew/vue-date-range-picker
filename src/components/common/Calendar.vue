<template>
  <div class="calendar-container">
    <div class="calendar-header">
      <div class="calendar-date">{{ headerDate }}</div>
    </div>
    <div class="calendar-week">
      <div v-for="dayName in daysName" :key="dayName" class="calendar-weekday">{{ dayName }}</div>
    </div>
    <div class="calendar-days">
      <div :style="{width: weekStart + 'px'}"></div>
      <div class="calendar-day" :class="{selected: isSelected(day)}" v-for="day in days" :key="day">
        <span class="calendar-day__text">{{ day }}</span>
        <span class="calendar-day__effect"></span>
      </div>
    </div>
  </div>
</template>

<script>
import Month from "../../modules/month.js";
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
      daysName: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    };
  },
  computed: {
    initDate() {
      if (!this.timestamp) {
        return moment().unix();
      }

      return this.timestamp;
    },
    headerDate() {
      return moment.unix(this.initDate).format("MMMM YYYY");
    },
    month() {
      return new Month(
        moment.unix(this.initDate).month(),
        moment.unix(this.initDate).year()
      );
    },
    today() {
      return moment.unix(this.initDate).date();
    },
    days() {
      return this.month.getDays();
    },
    weekStart() {
      const weekStart = this.month.getWeekStart();
      return weekStart ? weekStart * 45 : 0;
    }
  },
  methods: {
    isSelected(day) {
      return Number(day) === this.today;
    }
  }
};
</script>

<style scoped>
.calendar-container {
  position: absolute;
  top: 100%;
  background-color: #ffffff;
  border: 1px #d7d7d7 solid;
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
  padding: 20px 10px;
}
.calendar-weekday {
  color: #cdcdcd;
}
.calendar-days {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  height: 215px;
}
.calendar-day {
  position: relative;
  color: #cdcdcd;
  font-size: 12px;
  line-height: 12px;
  width: 35px;
  height: 35px;
  text-align: center;
  padding: 5px;
  cursor: pointer;
}
.calendar-day:hover,
.calendar-day.selected {
  color: #ffffff;
}
.calendar-day:hover .calendar-day__effect,
.calendar-day.selected .calendar-day__effect {
  transform: scale(1);
  opacity: 1;
}
.calendar-day__text {
  position: relative;
  z-index: 15;
}
.calendar-day__effect {
  position: absolute;
  background-color: #00dbb1;
  border-radius: 50%;
  top: -4px;
  left: 8px;
  width: 30px;
  height: 30px;
  transform: scale(0);
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  opacity: 0;
  z-index: 10;
}
</style>
