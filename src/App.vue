<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <routerLink class="nav-item nav-link" to="/">Home</routerLink>
          <routerLink class="nav-item nav-link" to="/cars">Cars</routerLink>
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
