<template>
  <v-container class="slider">
    <v-row
      justify="center">
      <v-col
        cols="12">
        <div>
          <h3>{{ title }}</h3>
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
                @click="chooseItem(item)"
                @mouseover="hoverItem"
              >
                <v-img :src="item.thumbnail" width="100%" height="72%"></v-img>
                <v-card-title>{{item.title}}</v-card-title>
                <!-- <v-card-subtitle>{{item.writer}}</v-card-subtitle> -->
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
      moveTo: {
        type: String,
      }
    },
    methods: {
      chooseItem(item) {
        if (this.moveTo === '/Video') {
          console.log('tt', item.title);
          this.$store.commit('list/VIDEO_SET', item);
          this.$router.push(`${this.moveTo}/${item.title}`);
        } else {
          this.$router.push(this.moveTo);
        }
      },
      hoverItem() {
      },
    },
  }
</script>

<style>
.slider {
  max-width: 1300px !important;
  width: 100% !important;
  padding: 30px 12px !important;
}
.photo {
  height: 60%;
  background-color: pink;
}
.v-card__title {
  text-overflow: ellipsis !important;
  width: 300px;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
}
</style>
