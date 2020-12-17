<template>
  <v-container>
    <v-card outlined color="white">
      <v-snackbar
        v-model="subWarning"
        :timeout="subtimeout"
        top
        color="red"
      >
        {{ errortext }}
        <template v-slot:action="{ attrs }">
          <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="subWarning = false"
          >
            <v-icon color="white">mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
      <v-row
        style="border-bottom: solid 1px rgba(0, 0, 0, 0.12);">
        <v-col>
          <h2>자막 분석</h2>
        </v-col>
      </v-row>
      <v-row
        style="
          height: 400px;
          display:flex;
          align-items:center;">
        <div style="width: 60%; margin: 0 auto;">
          <v-row>
            <v-col cols="10">
              <v-file-input
                v-model="subFile"
                show-size
                truncate-length="15"
              ></v-file-input>
            </v-col>
            <v-col cols="2">
              <v-btn style="height: 70%;" width="100%" @click="subtitleSubmit"> 확인 </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-row>
      <v-row class="text-center" v-if="subloading">
        <v-progress-circular
          :size="70"
          :width="7"
          color="gray"
          indeterminate
          style="margin: 0 auto;"
        ></v-progress-circular>
      </v-row>
      <v-row v-if="subComplete">
        <v-col
          v-for="(item, i) in items"
          :key="i"
          style="width: 350px"
        >
          <v-card
            style="max-width: 400px; min-width: 350px;"
            @click="$router.push(`/Video/${item.writer}`)">
            <v-img
              class="white--text align-end"
              style="width: auto; background-color: gray;"
              height="200px"
              :src="item.img"
            >
              <v-card-title></v-card-title>
            </v-img>
            <v-card-title>{{item.title}}</v-card-title>
            <v-card-subtitle>{{item.writer}}</v-card-subtitle>
            <v-card-text
              style="text-align: right;">
              {{item.writer}}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'SubtitleList',
  data() {
    return {
      subComplete: false,
      subloading: false,
      subFile: undefined,
      subWarning: false,
      subtimeout: 2000,
      errortext: '파일을 선택하세요.',
      slides: [
        require('../assets/main1.jpg'),
        require('../assets/main2.jpg'),
        require('../assets/main3.jpg'),
        require('../assets/main4.jpg'),
        require('../assets/main5.jpg'),
        require('../assets/main1.jpg'),
        require('../assets/main2.jpg'),
        require('../assets/main3.jpg'),
        require('../assets/main4.jpg'),
        require('../assets/main5.jpg'),
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
      timer: null,
      times: 0,
    }
  },
  methods: {
    subtitleSubmit() {
      console.log('subtitlesUBTIT', this.subFile);
      if (this.subFile) {
        this.subloading = true;
        this.subComplete = false;
        this.interval();
      } else {
        this.subWarning = true;
        this.subComplete = false;
        this.subloading = false;
      }
    },
    interval() {
      this.timer = setInterval(() => {
        this.times += 1;
        if (this.times >= 3) {
          clearInterval(this.timer);
          this.subloading = false;
          this.subComplete = true;
        }
      }, 1000);
    },
  },
}
</script>

<style>
.row {
  margin: 0px !important;
}
</style>
