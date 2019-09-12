<template>
  <div>
    <h1>Car id {{ id }}</h1>
    <button class="btn btn-sm btn-primary mb-2" @click="goBackToCars">
      Back
    </button>
    <br />
    <routerLink
      class="btn btn btn-info mt-2"
      tag="button"
      :to="{
        name: 'carFull',
        params: { id: id },
        query: { name: 'Mazda', year: 2019 }
      }"
      >More info
    </routerLink>
    <hr />
    <router-view></router-view>
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
  methods: {
    goBackToCars() {
      this.$router.push("/cars");
    }
  },
  watch: {
    $route(toR) {
      this.id = toR.params["id"];
    }
  }
};
</script>
