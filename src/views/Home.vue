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
      title="자막 분석"
      cardWidth="270"
      cardHeight="220"
      :items="items" 
      moveTo="/Video">
    </slider>
    <slider
      title="파트너 소개"
      cardWidth="340  "
      cardHeight="230"
      :items="items"
      moveTo="/Check">
    </slider>
    <slider
      title="신규 클래스"
      cardWidth="270"
      cardHeight="220"
      :items="items"
      moveTo="/About">
    </slider>
  </div>
</template>

<script>
import slider from '@/components/slider';
import axios from 'axios';
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
      items: [
        {
          img: require('../assets/main1.jpg'),
          title: 'title',
          writer: 'lumi1',
          body: '설명합니다.',
        },
        {
          img: require('../assets/main3.jpg'),
          title: 'title',
          writer: 'lumi2',
          body: '설명합니다.',
        },
        {
          img: require('../assets/main2.jpg'),
          title: 'title',
          writer: 'lumi3',
          body: '설명합니다.',
        },
        {
          img: require('../assets/main2.jpg'),
          title: 'title',
          writer: 'lumi4',
          body: '설명합니다.',
        },
        {
          img: require('../assets/main3.jpg'),
          title: 'title',
          writer: 'lumi5',
          body: '설명합니다.',
        },
        {
          img: require('../assets/main4.jpg'),
          title: 'title',
          writer: 'lumi6',
          body: '설명합니다.',
        },
        {
          img: require('../assets/main5.jpg'),
          title: 'title',
          writer: 'lumi7',
          body: '설명합니다.',
        },
        {
          img: require('../assets/main5.jpg'),
          title: 'title8',
          writer: 'lumi',
          body: '설명합니다.',
        },
        {
          img: require('../assets/main1.jpg'),
          title: 'title',
          writer: 'lumi9',
          body: '설명합니다.',
        },
        {
          img: require('../assets/main2.jpg'),
          title: 'title',
          writer: 'lumi10',
          body: '설명합니다.',
        },
        {
          img: require('../assets/main5.jpg'),
          title: 'title',
          writer: 'lumi7',
          body: '설명합니다.',
          time: '00:00:27.00'
        },
        {
          img: require('../assets/main5.jpg'),
          title: 'title8',
          writer: 'lumi',
          body: '설명합니다.',
          time: '00:00:27.00'
        },
      ],
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
    }
  },
  methods: {
    connect(path, data) {
      axios.get(path, data)
        .then(res => {
          console.log('res: ', res);
        })
        .catch(e => {
          console.log('error: ', e);
        });
    },
  },
  created() {
    // const formData = '';
    // this.connect
  },
  mounted() {
  },
}
</script>

<style>
.homeRow {
  padding: 20px 0px;
}
</style>
