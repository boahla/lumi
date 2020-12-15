<template>
  <v-container class="slider">
    <v-row
      justify="center">
      <v-col
        cols="12">
        <div>
          <h2>{{ title }}</h2>
        </div>
        <v-sheet
          class="mx-auto"
          max-width="100%"
        >
          <v-slide-group
            v-model="model"
            class="pa-4"
            active-class="success"
            show-arrows
          >
            <v-slide-item
              v-for="(item, i) in items"
              :key="i"
            >
              <v-card
                class="ma-4"
                :height="cardHeight"
                :width="cardWidth"
                @click="chooseItem"
                @mouseover="hoverItem"
              >
                <v-img :src="item" width="100%" height="60%"></v-img>
                <v-card-title>{{item}}</v-card-title>
                <v-card-subtitle>{{item}}</v-card-subtitle>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
  export default {
    name: 'slider',
    data() {
      return {
        model: null,
      }
    },
    props: {
      title: {
        type: String,
        default: '',
      },
      items: {
        type: Array,
      },
      cardHeight: {
        type: String,
        default: '300',
      },
      cardWidth: {
        type: String,
        default: '445',
      },
    },
    methods: {
      chooseItem() {
        console.log('chooseItem');
        this.$router.push('/Check');
      },
      hoverItem() {
      },
    },
  }
</script>

<style>
.slider {
  max-width: 100% !important;
  width: 100% !important;
  padding: 30px 12px !important;
}
.photo {
  height: 60%;
  background-color: pink;
}
</style>
