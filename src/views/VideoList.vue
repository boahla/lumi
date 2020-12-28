<template>
  <v-container class="vidList">
    <v-card outlined color="white">
      <v-snackbar
        v-model="videoWarning"
        :timeout="videotimeout"
        top
        color="red"
      >
        {{ errortext }}
        <template v-slot:action="{ attrs }">
          <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="videoWarning = false"
          >
            <v-icon color="white">mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
      <v-row
        style="border-bottom: solid 1px rgba(0, 0, 0, 0.12);">
        <v-col>
          <h3>동영상 분석</h3>
        </v-col>
      </v-row>
      <v-row
        style="
          height: 290px;
          display:flex;
          align-items:center;">
        <div style="width: 60%; margin: 0 auto;">
          <v-row>
            <v-col cols="10">
              <!-- <v-file-input
                v-model="videoFile"
                show-size
                truncate-length="15"
              ></v-file-input> -->
              <v-select
                v-model="videoFile"
                :items="videoItems">
              </v-select>
            </v-col>
            <v-col cols="2">
              <v-btn
                style="height:60%;"
                width="100%"
                @click="videoSubmit"
                depressed
                class="ma-2 white--text"
                color="#BDBDBD"> 확인 </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-row>
      <!-- <v-row class="text-center" v-if="videoloading">
        <v-progress-circular
          :size="70"
          :width="7"
          color="blue-grey"
          indeterminate
          style="margin: 0 auto;"
        ></v-progress-circular>
      </v-row>
      <v-row v-if="videoComplete">
        <v-col
          v-for="(item, i) in items"
          :key="i"
          style="width: 300px"
        >
          <v-card
            style="max-width: 350px; min-width: 300px;"
            @click="$router.push(`/Video/${item.writer}`)">
            <v-img
              class="white--text align-end"
              style="width: auto; background-color: gray;"
              height="160px"
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
      </v-row> -->
    </v-card>
  </v-container>
</template>

<script>
import API from '@/mixin/api';
export default {
  name: 'VideoList',
  mixins: [API],
  data() {
    return {
      videoItems: [
        '제목1',
        '제목2',
        '제목3',
        '제목4',
        '제목5',
        '제목6',
      ],
      videoFile: null,
      videoWarning: false,
      videotimeout: 2000,
      errortext: '파일을 선택하세요.',
      items: [
        {
          img: require('../assets/main1.jpg'),
          title: 'title',
          writer: 'lumi1',
          body: '설명합니다.',
          time: '00:00:27.00'
        },
        {
          img: require('../assets/main3.jpg'),
          title: 'title',
          writer: 'lumi2',
          body: '설명합니다.',
          time: '00:00:27.00'
        },
        {
          img: require('../assets/main2.jpg'),
          title: 'title',
          writer: 'lumi3',
          body: '설명합니다.',
          time: '00:00:27.00'
        },
        {
          img: require('../assets/main2.jpg'),
          title: 'title',
          writer: 'lumi4',
          body: '설명합니다.',
          time: '00:00:27.00'
        },
        {
          img: require('../assets/main3.jpg'),
          title: 'title',
          writer: 'lumi5',
          body: '설명합니다.',
          time: '00:00:27.00'
        },
        {
          img: require('../assets/main4.jpg'),
          title: 'title',
          writer: 'lumi6',
          body: '설명합니다.',
          time: '00:00:27.00'
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
        {
          img: require('../assets/main1.jpg'),
          title: 'title',
          writer: 'lumi9',
          body: '설명합니다.',
          time: '00:00:27.00'
        },
        {
          img: require('../assets/main2.jpg'),
          title: 'title',
          writer: 'lumi10',
          body: '설명합니다.',
          time: '00:00:27.00'
        },
        {
          img: require('../assets/main2.jpg'),
          title: 'title',
          writer: 'lumi10',
          body: '설명합니다.',
          time: '00:00:27.00'
        },
        {
          img: require('../assets/main2.jpg'),
          title: 'title',
          writer: 'lumi10',
          body: '설명합니다.',
          time: '00:00:27.00'
        },
      ],
      timer: null,
      times: 0,
    }
  },
  methods: {
    videoSubmit() {
      console.log('subtitlesUBTIT', this.videoFile);
      if (this.videoFile) {
        this.$router.push(`/Video/${this.videoFile}`);
      } else {
        this.videoWarning = true;
      }
    },
    interval() {
      this.timer = setInterval(() => {
        this.times += 1;
        if (this.times >= 3) {
          clearInterval(this.timer);
        }
      }, 1000);
    },
  },
  created() {
    this.bring(1, 'videolist');
  },
}
</script>

<style>
.row {
  margin: 0px !important;
}
.vidList {
  max-width: 1300px !important;
}
</style>
