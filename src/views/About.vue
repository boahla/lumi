<template>
    <!-- <v-card>
      <v-app-bar
        absolute
        color="#6A76AB"
        dark
        shrink-on-scroll
        prominent
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3"
      >
        <v-spacer></v-spacer>
        <template v-slot:extension>
          <v-tabs align-with-title center>
            <v-tab>Tab 1</v-tab>
            <v-tab>Tab 2</v-tab>
            <v-tab>Tab 3</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-3"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 1000px;"></v-container>
      </v-sheet>
    </v-card> -->
    <v-container>
      <v-tabs>
        <v-tab
          :href="'#introduce'"
          @click="$router.push('/about/introduce')">
          Item Two
        </v-tab>
        <v-tab
          :href="'#class'"
          @click="$router.push('/about/class')">
          Item One
        </v-tab>
        <v-tab>Item Three</v-tab>
      </v-tabs>
      <router-view></router-view>
    </v-container>
    
</template>

<script>
  export default {
    name: 'About',
    data() {
      return {

      }
    },
  }
</script>

<style>
</style>
