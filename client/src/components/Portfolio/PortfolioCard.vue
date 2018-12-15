<template>
  <v-flex xs12 sm12 d-flex class="cardFlex">
    <!-- <div> -->
      <v-card class="my-2 mx-2 cards" v-for="card in cards" :key="card.title">
        <v-img
          :src="card.image"
          aspect-ratio="2.75"
          class="cardImage"
        ></v-img>

        <v-card-title primary-title class="justify-center">
          <div>
            <h3 class="headline mb-0">{{ card.title }}</h3>
            <div>{{ card.info }}</div>
          </div>
        </v-card-title>

        <v-card-actions class="justify-left">
          <v-btn flat color="light-green darken-4"
          :href="card.github"
          target="_blank">GitHub</v-btn>
          <v-btn flat color="light-green darken-4"
          v-if="$store.state.isUserLoggedIn">Favorite</v-btn>
        </v-card-actions>
      </v-card>
    <!-- </div> -->
    </v-flex>
</template>

<script>
import openRoader from '@/assets/openRoaders1.png'
import giphy from '@/assets/giphy3.png'
import songTracker from '@/assets/songTracker.png'
import triviaGame from '@/assets/triviaGame2.png'
export default {
  data () {
    return {
      cards: [
        {
          image: openRoader,
          title: 'Open Roaders',
          info: 'Plan your road trip or plan your errands with us.',
          github: 'https://github.com/SenorEdbot/project1'
        },
        {
          image: giphy,
          title: 'Giphy',
          info: 'Search gifs easily with giphy',
          github: 'https://github.com/SenorEdbot/GifTastic'
        },
        {
          image: songTracker,
          title: 'Song Tracker',
          info: 'Save your favorite songs and search between them.',
          github: 'https://github.com/SenorEdbot/SongTracker'
        },
        {
          image: triviaGame,
          title: 'Trivia Game',
          info: 'Check to see how in tune you are with your Eminem facts.',
          github: 'https://github.com/SenorEdbot/TriviaGame'
        }
      ]
    }
  }

}
</script>

<style scoped>
.cardImage {
  width: 100%;
}
.cards {
  min-width: 25%;
  width: 45%;
}
.cardFlex {
  flex-wrap: wrap;
}
</style>
