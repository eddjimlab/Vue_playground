<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="container">
      <h1 class="display-2 text-center">Form control</h1>
      <h2>Email</h2>
      <form class="pt-3" @submit.prevent="onSubmit">
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
          <div class="invalid-feedback" v-if="!$v.email.uniqEmail">
            This email is not uniq, try again!
          </div>
        </div>
        <h2>Password</h2>

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
        </div>

        <h2>Confirm password</h2>
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
        </div>
        <button
          class="btn btn-success btn-lg"
          type="submit"
          :disabled="$v.$invalid"
        >
          Submit
        </button>
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
  methods: {
    onSubmit() {
      console.log("Email", this.email);
      console.log("Password", this.password);
    }
  },
  validations: {
    email: {
      required,
      email,
      uniqEmail: function(newEmail) {
        if (newEmail === "") return true;

        return new Promise(resolve => {
          setTimeout(() => {
            const value = newEmail !== "test@mail.ru";
            resolve(value);
          }, 1000);
        });
      }
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
