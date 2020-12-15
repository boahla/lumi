<template>
  <v-container>
    <v-row dense>
      <v-col
        v-for="(item, i) in 17"
        :key="i"
        style="max-width: 300px; min-width: 250px;"
      >
        <v-card
          style="max-width: 300px; min-width: 250px;">
          <v-img
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            style="width: auto;"
            height="200px"
          >
            <v-card-title></v-card-title>
          </v-img>
          <v-card-title>Titles</v-card-title>
          <v-card-subtitle>subtitle입니다 다람쥐</v-card-subtitle>
          <v-card-text
            style="text-align: right;">
            50,000원
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Class',
    data() {
      return {

      }
    },
  }
</script>

<style>
</style>
