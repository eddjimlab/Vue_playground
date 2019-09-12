<template>
  <div>
    <h2>Car Name: {{ $route.query.name }}</h2>
    <h4>Car year: {{ year }}</h4>

    <div class="scroll"></div>
    <h6 id="scroll">Hello from the bottom</h6>
    <div class="scroll"></div>
  </div>
</template>

<script>
export default {
  computed: {
    year() {
      return this.$route.query.year;
    }
  }
};
</script>

<style lang="scss">
.scroll {
  height: 1000px;
  width: 100px;
  background: #ccc;
}
</style>
