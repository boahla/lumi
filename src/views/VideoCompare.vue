<template>
  <v-container class="videoComCon">
    <v-card
      outlined
      color="white">
        <v-row>
          <v-col style="background-color: pink;"></v-col>
          <v-col style="background-color: blue;"></v-col>
        </v-row>
        <v-row>
          <v-col style="background-color: yellow;">
            <vue-plyr>
              <video>
                <source />
                  </video>
            </vue-plyr>
          </v-col>
          <v-col style="background-color: green;">
            <vue-plyr>
              <video>
                <source />
              </video>
            </vue-plyr>
          </v-col>
        </v-row>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'VideoCompare',
    data() {
      return {
      }
    },
  }
</script>

<style>
</style>
