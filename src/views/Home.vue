<template>
  <div class="home">
    <v-row>
      <v-carousel
        cycle
        height="600"
        hide-delimiter-background
        :show-arrows="false"
      >
        <v-carousel-item
          v-for="(item, i) in slides"
          :key="i"
        >
          <img :src="item" width="100%" height="100%">
          <!-- <img src="../assets/logo.png"> -->
        </v-carousel-item>
      </v-carousel>
    </v-row>
    <slider
      title="추천 클래스"
      cardWidth="270"
      cardHeight="220"
      :items="slides"
      moveTo="/Video">
    </slider>
    <slider
      title="파트너 소개"
      cardWidth="340  "
      cardHeight="230"
      :items="colors"
      moveTo="/Check">
    </slider>
    <slider
      title="신규 클래스"
      cardWidth="270"
      cardHeight="220"
      :items="slides"
      moveTo="/About">
    </slider>
  </div>
</template>

<script>
import slider from '@/components/slider';
export default {
  name: 'Home',
  components: {
    slider,
  },
  data() {
    return {
      slides: [
        require('../assets/main1.jpg'),
        require('../assets/main2.jpg'),
        require('../assets/main3.jpg'),
        require('../assets/main4.jpg'),
        require('../assets/main5.jpg'),
      ],
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slidess: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
  mounted() {
    console.log(this.$route);
  },
}
</script>

<style>
.homeRow {
  padding: 20px 0px;
}
</style>
