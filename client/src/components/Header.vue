<template>
  <v-toolbar fixed class="light-green darken-2">
    <v-toolbar-title class="mr-4">
      <router-link
        class="home"
        tag="span"
        :to="{ name: 'home' }">
        Eddie Franco
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <!-- TODO add portfolio -->
      <v-btn flat dark>
        Portfolio
      </v-btn>
      <!-- TODO add contact -->
      <v-btn flat dark>
        Contact
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark
        :to="{ name: 'register' }">
        Sign Up
      </v-btn>

      <v-btn flat dark
        :to="{ name: 'login' }">
        Login
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: gold;
}
</style>
