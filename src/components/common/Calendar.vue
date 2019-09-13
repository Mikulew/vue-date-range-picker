<template>
  <div class="calendar-container">
    <div class="calendar-header">
      <div class="calendar-controls">
        <div class="calendar-controls__prev" @click="prevMonth()">
          <img
            class="calendar-controls-icon"
            alt="Left arrow icon"
            src="../../assets/left-arrow.svg"
          />
        </div>
        <div class="calendar-controls__next" @click="nextMonth()">
          <img
            class="calendar-controls-icon"
            alt="Right arrow icon"
            src="../../assets/right-arrow.svg"
          />
        </div>
      </div>
      <div class="calendar-date">{{ headerDate }}</div>
    </div>
    <div class="calendar-week">
      <div v-for="dayName in daysName" :key="dayName" class="calendar-weekday">{{ dayName }}</div>
    </div>
    <div class="calendar-days">
      <div :style="{width: weekStart + 'px'}"></div>
      <div
        class="calendar-day"
        :class="{selected: isSelected(day)}"
        v-for="day in days"
        :key="day"
        @click="selectDate(day)"
      >
        <span class="calendar-day__text">{{ day }}</span>
        <span class="calendar-day__effect"></span>
      </div>
    </div>
    <div class="calendar-actions">
      <button class="calendar-button calendar-button__submit" @click.prevent="submitDate">Submit</button>
      <button class="calendar-button calendar-button__cancel" @click.prevent="closeCalendar">Cancel</button>
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
    },
    format: {
      type: String,
      default: "DD-MM-YYYY"
    },
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      daysName: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      currentTimestamp: this.timestamp,
      defaultText: this.text,
      selectedDate: this.timestamp,
      selectedDay: this.today
    };
  },
  computed: {
    initDate: {
      get() {
        if (!this.currentTimestamp) {
          return moment().unix();
        }

        return this.currentTimestamp;
      },
      set(newValue) {
        return (this.currentTimestamp = newValue);
      }
    },
    headerDate() {
      return moment.unix(this.initDate).format("MMMM YYYY");
    },
    month: {
      get() {
        return new Month(
          moment.unix(this.initDate).month(),
          moment.unix(this.initDate).year()
        );
      },
      set(newValue) {
        return new Month(newValue.month, newValue.year);
      }
    },
    today() {
      return moment.unix(this.selectedDate).date();
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
    },
    selectDate(day) {
      const currentTimestamp = moment({
        year: moment.unix(this.initDate).year(),
        month: moment.unix(this.initDate).month(),
        day
      }).unix();
      this.selectedDate = currentTimestamp;
      this.selectedDay = day;
      this.changeText(currentTimestamp);
    },
    prevMonth() {
      let month = this.month.month - 1;
      let year = this.month.year;
      if (month < 0) {
        year -= 1;
        month = 11;
      }
      this.month = { month, year };
      let timestamp = moment({
        year,
        month,
        day: this.today
      }).unix();
      this.initDate = timestamp;
      this.changeText(timestamp);
    },
    nextMonth() {
      let month = this.month.month + 1;
      let year = this.month.year;
      if (month > 11) {
        year += 1;
        month = 0;
      }
      this.month = { month, year };
      let timestamp = moment({
        year,
        month,
        day: this.today
      }).unix();
      this.initDate = timestamp;
      this.changeText(timestamp);
    },
    changeText(timestamp) {
      this.$emit("changeText", moment.unix(timestamp).format(this.format));
    },
    closeCalendar() {
      this.$emit("closeCalendar", false);
      this.$emit("changeText", this.defaultText);
    },
    submitDate() {
      this.$emit("closeCalendar", false);
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
  min-height: 360px;
  width: 315px;
  z-index: 5;
}
.calendar-header {
  position: relative;
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
  min-height: 260px;
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
.calendar-day:hover {
  color: #00dbb1;
}

.calendar-day:hover .calendar-day__effect,
.calendar-day.selected .calendar-day__effect {
  transform: scale(1);
  opacity: 1;
}
.calendar-day:hover .calendar-day__effect {
  background-color: #ffffff;
  border: 2px #00dbb1 solid;
}
.calendar-day:hover .calendar-day__text {
  color: #00dbb1;
}
.calendar-day.selected .calendar-day__effect {
  background-color: #00dbb1;
}
.calendar-day.selected .calendar-day__text {
  color: #ffffff;
}
.calendar-day__text {
  position: relative;
  z-index: 15;
}
.calendar-day__effect {
  position: absolute;
  border-radius: 50%;
  border: 2px transparent solid;
  top: -6px;
  left: 6px;
  width: 30px;
  height: 30px;
  transform: scale(0);
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  opacity: 0;
  z-index: 10;
}
.calendar-controls {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.calendar-controls__next {
  margin-right: 15px;
}
.calendar-controls__prev {
  margin-left: 15px;
}
.calendar-controls-icon {
  width: 15px;
  height: 15px;
  cursor: pointer;
}
.calendar-actions {
  padding: 0 0 15px 15px;
}
.calendar-button {
  padding: 5px 10px;
  margin-right: 10px;
  border: none;
  cursor: pointer;
  transition: all 750ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
}
.calendar-button__submit {
  background-color: #00dbb1;
}
.calendar-button__submit:hover {
  background-color: #00c59f;
}
.calendar-button__cancel {
  background-color: #d7d7d7;
}
.calendar-button__cancel:hover {
  background-color: #c1c1c1;
}
</style>
