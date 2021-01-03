<template>
  <div class="home">
    <!-- <v-dialog
      class="videoLoading"
      v-model="stList"
      persistent
      width="300"
    >
      <v-card class="lodaingCard">
        <v-progress-circular
          :size="90"
          :width="10"
          color="white"
          indeterminate
        ></v-progress-circular>
      </v-card>
    </v-dialog> -->
    <v-row>
      <v-carousel
        cycle
        height="400"
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
      v-if="checkLogin"
      title="자막 분석"
      cardWidth="300"
      cardHeight="220"
      :items="subItems" 
      moveTo="/Video">
    </slider>
    <slider
      title="동영상 소개"
      cardWidth="340  "
      cardHeight="230"
      :items="items"
      moveTo="/Check">
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
      user: this.$store.state.user.user,
      slides: [
        require('../assets/castio1.png'),
        require('../assets/castio2.png'),
        require('../assets/castio3.png'),
        require('../assets/castio4.png'),
        require('../assets/castio5.png'),
      ],
      subItems: [],
      thumbnail: [],
      items: [
        {
          thumbnail: require('../assets/main5.jpg'),
          title: 'title8',
          writer: 'lumi',
          body: '설명합니다.',
          url: 'abc',
        },
        {
          thumbnail: require('../assets/main1.jpg'),
          title: 'title',
          writer: 'lumi9',
          body: '설명합니다.',
          url: 'abc',
        },
        {
          thumbnail: require('../assets/main2.jpg'),
          title: 'title',
          writer: 'lumi10',
          body: '설명합니다.',
          url: 'abc',
        },
        {
          thumbnail: require('../assets/main5.jpg'),
          title: 'title',
          writer: 'lumi7',
          body: '설명합니다.',
          url: 'abc',
        },
        {
          thumbnail: require('../assets/main5.jpg'),
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
      this.$store.dispatch('list/getlist', {
        id: this.user.id,
        url: `Reco?{&User_id=${this.user.id}&}`
      })
      if (this.$store.state.list.homeList !== '' && this.$store.state.list.homeList.length !== 0) {
        const sub = this.$store.state.list.homeList.substring(2, this.$store.state.list.homeList.length - 2);
        const sp = sub.split('\', \'');
        sp.forEach(element => {
          const sl = element.split(': ');
          this.subItems.push({
            title: sl[0],
            url: `https://www.youtube.com/embed/${sl[1].substring(32, 43)}`,
            thumbnail: `https://img.youtube.com/vi/${sl[1].substring(32, 43)}/mqdefault.jpg`,
          })
        });
      }
      console.log('subitems', this.user.id, this.subItems);
    },
    editList() {
    },
  },
  mounted() {
  },
  computed: {
    checkLogin() {
      if (this.user.flag) {
        this.getList();
      }
      return this.user.flag;
    }, 
  },
}
</script>

<style>
.homeRow {
  padding: 20px 0px;
}
.lodaingCard {
  background-color: unset !important;
  overflow: hidden;
  text-align: center;;
}
</style>
