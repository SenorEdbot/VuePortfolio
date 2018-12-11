<template>
  <div>
    <h1>Register</h1>
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
          @click="register">Register</v-btn>
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
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>
