<template>
  <div>
    <h2>Car Name: {{ $route.query.name }}</h2>
    <h4>Car year: {{ year }}</h4>
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

<style lang="scss"></style>
