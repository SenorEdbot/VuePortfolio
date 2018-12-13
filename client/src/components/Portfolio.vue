<template>
  <div>
    <v-layout>
      <v-flex xs8	>
        <h1>Portfolio</h1>
        <!-- <v-card>
          <v-img
            :src="openRoaderImg"
            width="50%"
            max-width="50%"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Open Roaders</h3>
              <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="green">Save</v-btn>
            <v-btn flat color="green">Explore</v-btn>
            <v-btn flat color="green">Githuub Repo</v-btn>
          </v-card-actions>
        </v-card> -->
        <v-card>
          <v-container
            fluid
            grid-list-md
          >
            <v-layout row wrap>
              <v-flex>
                <v-card>
                  <v-img
                    :src="openRoaderImg"
                    height="200px"
                  >
                    <v-container
                      fill-height
                      fluid
                      pa-2
                    >
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline white--text">Open Roaders</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>favorite</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>bookmark</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>share</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import openRoader from '@/assets/openRoaders1.png'
export default {
  data () {
    return {
      openRoaderImg: openRoader
    }
  }

}
</script>

<style scoped>

</style>
