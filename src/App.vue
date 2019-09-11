<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <routerLink
            tag="li"
            class="nav-item"
            to="/"
            exact
            active-class="active"
            ><a class="nav-link">Home</a></routerLink
          >
          <routerLink tag="li" class="nav-item" to="/cars" active-class="active"
            ><a class="nav-link">Cars</a></routerLink
          >
          <routerLink
            tag="li"
            class="nav-item"
            to="/car/3"
            active-class="active"
            ><a class="nav-link">Car 3</a></routerLink
          >
          <routerLink
            tag="li"
            class="nav-item"
            to="/car/4"
            active-class="active"
            ><a class="nav-link">Car 4</a></routerLink
          >
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
