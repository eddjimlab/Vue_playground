<template>
  <div>
    <h1>Car id {{ id }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // эквивалентные записи
      //   id: this.$router.currentRoute.params["id"]
      id: this.$route.params["id"]
    };
  },
  watch: {
    $route(toR) {
      this.id = toR.params["id"];
    }
  }
};
</script>
