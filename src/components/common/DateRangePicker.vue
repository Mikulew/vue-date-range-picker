<template>
  <div>
    <input type="text" :value="dateFormatted" />
    <input type="text" :value="dateFormatted" />
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    value: {
      type: String,
      required: true
    },
    format: {
      type: String,
      default: "YYYY-MM-DD"
    }
  },
  data() {
    return {
      date: moment(this.value, this.format)
    };
  },
  computed: {
    dateFormatted() {
      return this.date.format(this.format);
    }
  }
};
</script>
