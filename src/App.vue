<template>
  <div id="app">
    <Form />
  </div>
</template>

<script>
import Form from "./layout/Form.vue";

export default {
  name: "app",
  components: {
    Form
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #ececec;
  min-width: 100vw;
  min-height: 100vh;
}
</style>
