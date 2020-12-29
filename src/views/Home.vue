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
        </v-carousel-item>
      </v-carousel>
    </v-row>
    <slider
      title="자막 분석"
      cardWidth="270"
      cardHeight="220"
      :items="subItems" 
      moveTo="/Video">
    </slider>
    <slider
      title="파트너 소개"
      cardWidth="340  "
      cardHeight="230"
      :items="items"
      moveTo="/Check">
    </slider>
    <div>{{getVideo}}</div>
  </div>
</template>

<script>
import slider from '@/components/slider';
import API from '@/mixin/api';
export default {
  name: 'Home',
  mixins: [API],
  components: {
    slider,
  },
  data() {
    return {
      user: this.$store.state.user.user,
      slides: [
        require('../assets/main1.jpg'),
        require('../assets/main2.jpg'),
        require('../assets/main3.jpg'),
        require('../assets/main4.jpg'),
        require('../assets/main5.jpg'),
      ],
      subItems: [],
      items: [
        {
          img: require('../assets/main5.jpg'),
          title: 'title8',
          writer: 'lumi',
          body: '설명합니다.',
          url: 'abc',
        },
        {
          img: require('../assets/main1.jpg'),
          title: 'title',
          writer: 'lumi9',
          body: '설명합니다.',
          url: 'abc',
        },
        {
          img: require('../assets/main2.jpg'),
          title: 'title',
          writer: 'lumi10',
          body: '설명합니다.',
          url: 'abc',
        },
        {
          img: require('../assets/main5.jpg'),
          title: 'title',
          writer: 'lumi7',
          body: '설명합니다.',
          url: 'abc',
        },
        {
          img: require('../assets/main5.jpg'),
          title: 'title8',
          writer: 'lumi',
          body: '설명합니다.',
          url: 'abc',
        },
      ],
    }
  },
  methods: {
    getList() {
      this.subItems = [];
      this.$store.dispatch('api', {
        url: `Reco?{&User_id=${this.user.id}&}`
      })
      // 28
      const sub = this.$store.state.data.substring(3, this.$store.state.data.length - 2);
      const sp = sub.split('\', \'');
      sp.forEach(element => {
        const sl = element.split(': ');
        this.subItems.push({
          title: sl[0],
          url: sl[1],
        })
      });
      console.log('subitems', this.subItems);
    }
  },
  computed: {
    getVideo() {
      if (this.user.id !== '') {
        console.log('있음');
        this.getList();
      } else {
        console.log('없음');
      }
      return this.user.id;
    },
  },
}
</script>

<style>
.homeRow {
  padding: 20px 0px;
}
</style>
