<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="container">
      <h1 class="display-2 text-center">Form control</h1>
      <h2>Email</h2>
      <form class="pt-3">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            class="form-control"
            :class="{ 'is-invalid': $v.email.$error }"
            @blur="$v.email.$touch()"
            v-model="email"
          />
          <div class="invalid-feedback" v-if="!$v.email.required">
            The fields must not be empty!!!
          </div>
          <div class="invalid-feedback" v-if="!$v.email.email">
            Email required!!!
          </div>
        </div>
      </form>
      <h2>Password</h2>
      <form class="pt-3">
        <div class="form-group">
          <label for="password">password</label>
          <input
            type="password"
            id="password"
            class="form-control"
            :class="{ 'is-invalid': $v.password.$error }"
            @blur="$v.password.$touch()"
            v-model="password"
          />
          <div class="invalid-feedback" v-if="!$v.password.minlength">
            Min password length is {{ $v.password.$params.minLength.min }}. Now
            it`s {{ password.length }}
          </div>
          <pre></pre>
        </div>
      </form>

      <h2>Confirm password</h2>
      <form class="pt-3">
        <div class="form-group">
          <label for="confirm">Confirm password</label>
          <input
            type="password"
            id="confirm"
            class="form-control"
            :class="{ 'is-invalid': $v.confirm.$error }"
            @blur="$v.confirm.$touch()"
            v-model="confirm"
          />
          <div class="invalid-feedback" v-if="!$v.sameAs">
            Password is not the same
          </div>
          <pre></pre>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: "",
      confirm: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      minLength: minLength(6)
    },
    confirm: {
      sameAs: sameAs("password")
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

h2 {
  color: blue;
  font-size: 2rem;
}
</style>
