<template>
  <v-layout>
    <v-flex xs8>
      <h1>My Story</h1>
      <img :src="profileImage" class="profileImage" />
    </v-flex>
  </v-layout>
</template>

<script>
import profileImage from '@/assets/me.jpg'
export default {
  data () {
    return {
      profileImage: profileImage
    }
  }

}
</script>

<style scoped>
.profileImage{
  width: 13%;
  border-radius: 50%;
}

</style>
