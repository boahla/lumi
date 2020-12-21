<template>
  <v-container class="videoCont">
    <v-dialog
      class="videoLoading"
      v-model="videoloading"
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
    </v-dialog>
    <v-card>

    </v-card>
    <v-card
      outlined
      color="white"
      >
      <v-row style="padding: 2% 0px !important;">
        <v-col
          cols="8"
          style="height: 100%;">
          <iframe src="https://www.youtube.com/embed/3iM_06QeZi8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <!-- <video src="https://www.youtube.com/embed/3iM_06QeZi8"></video> -->
        </v-col>
        <v-col
          cols="4">
          <v-input
            hide-details="">
            <h3>추천 동영상</h3>
          </v-input>
          <v-divider></v-divider>
          <v-list class="videoList">
            <v-list-item-group>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                @click="$router.push(`/Video/${item.writer}`)">
                <v-list-item-avatar
                  tile
                  width="45%"
                  height="100%">
                  <v-img
                    :src="item.img">
                  </v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <h3>{{item.title}}</h3>
                  <div style="padding: 3% 0%;">
                    {{item.writer}}
                  </div>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'Video',
    data() {
      return {
        videoloading: true,
        timer: null,
        times: 0,
        items : [
          {
            img: require('../assets/main2.jpg'),
            title: 'title1',
            writer: 'lumi1',
            body: '설명합니다.',
          },
          {
            img: require('../assets/main3.jpg'),
            title: 'title3',
            writer: 'lumi2',
            body: '설명합니다.',
          },
          {
            img: require('../assets/main5.jpg'),
            title: 'title2',
            writer: 'lumi3',
            body: '설명합니다.',
          },
          {
            img: require('../assets/main2.jpg'),
            title: 'title1',
            writer: 'lumi1',
            body: '설명합니다.',
          },
          {
            img: require('../assets/main3.jpg'),
            title: 'title3',
            writer: 'lumi2',
            body: '설명합니다.',
          },
          {
            img: require('../assets/main5.jpg'),
            title: 'title2',
            writer: 'lumi3',
            body: '설명합니다.',
          },
        ],
      }
    },
    methods: {
      interval() {
      this.timer = setInterval(() => {
        this.times += 1;
        if (this.times >= 2) {
          // 로딩 프로그래스 종료
          this.videoloading = false;
          clearInterval(this.timer);
        }
      }, 1000);
    },
    },
    mounted() {
      this.interval();
    },
  }
</script>

<style>
.videoCont {
  max-width: 88% !important;
}
.v-dialog {
  box-shadow: unset !important;
}
.videoCont >>> .v-dialog {
  box-shadow: unset !important;
}
.lodaingCard {
  background-color: unset !important;
  overflow: hidden;
  text-align: center;;
}
iframe {
  width: 100%;
  height: 66vh;
}
iframe {
  width: 100%;
  height: 66vh;
}
.videoCont .v-list-item__content {
  align-items: start !important;
  align-self: start !important;
  padding: 5% 0px !important;
}
.videoList {
  height: 62.3vh;
  overflow: auto;
}
</style>
