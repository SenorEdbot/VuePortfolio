<template>
  <div>
    <h1>Login</h1>
    <form
          name="vue-portfolio-form"
          autocomplete="off">
          <v-text-field
            type="email"
            label="Email"
            v-model="email" />
          <br />
          <v-text-field
            type="password"
            label="Password"
            v-model="password"
            autocomplete="new-password" />
        </form>
        <br />
        <div class="danger-alert" v-html="error" />
        <v-btn
          class="light-green darken-2"
          dark
          @click="login">Login</v-btn>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>
