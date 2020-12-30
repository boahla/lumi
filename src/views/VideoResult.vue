<template>
  <v-container class="videoCont">
    <v-dialog
      v-model="listLoading"
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
          <iframe src="https://www.youtube.com/embed/hVOOyM5Sl24" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <!-- <video width="100%" controls="controls" :src="plyVideo.url" autoplay></video> -->
          <h3>{{plyVideo.keyvideo}}</h3>
        </v-col>
        <v-col
          cols="4">
          <v-input
            hide-details="">
            <h3>Keyframe</h3>
          </v-input>
          <v-divider></v-divider>
          <v-list class="videoList">
            <v-item-group
              v-model="selected"
              multiple
            >
              <v-row>
                <v-col
                  v-for="(item, i) in recLists.keyframe"
                  :key="i"
                  cols="12"
                  md="6"
                  style="padding: 2px;"
                >
                  <v-item>
                    <v-img
                      :src="item"
                      height="120"
                    >
                    </v-img>
                  </v-item>
                </v-col>
              </v-row>
            </v-item-group>
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
      user: this.$store.state.user.user,
      plyVideo: this.$store.state.list,
      recLists : [
        {
          thumbnail: require('../assets/main1.jpg'),
          title: 'title',
          writer: 'lumi1',
          body: '설명합니다.',
          time: '00:00:27.00'
        },
        {
          thumbnail: require('../assets/main3.jpg'),
          title: 'title',
          writer: 'lumi2',
          body: '설명합니다.',
          time: '00:00:27.00'
        },
        {
          thumbnail: require('../assets/main2.jpg'),
          title: 'title',
          writer: 'lumi3',
          body: '설명합니다.',
          time: '00:00:27.00'
        },
        {
          thumbnail: require('../assets/main2.jpg'),
          title: 'title',
          writer: 'lumi4',
          body: '설명합니다.',
          time: '00:00:27.00'
        },
        {
          thumbnail: require('../assets/main3.jpg'),
          title: 'title',
          writer: 'lumi5',
          body: '설명합니다.',
          time: '00:00:27.00'
        },
        {
          thumbnail: require('../assets/main4.jpg'),
          title: 'title',
          writer: 'lumi6',
          body: '설명합니다.',
          time: '00:00:27.00'
        },
        {
          thumbnail: require('../assets/main5.jpg'),
          title: 'title',
          writer: 'lumi7',
          body: '설명합니다.',
          time: '00:00:27.00'
        },
        {
          thumbnail: require('../assets/main5.jpg'),
          title: 'title8',
          writer: 'lumi',
          body: '설명합니다.',
          time: '00:00:27.00'
        },
        {
          thumbnail: require('../assets/main1.jpg'),
          title: 'title',
          writer: 'lumi9',
          body: '설명합니다.',
          time: '00:00:27.00'
        },
        {
          thumbnail: require('../assets/main2.jpg'),
          title: 'title',
          writer: 'lumi10',
          body: '설명합니다.',
          time: '00:00:27.00'
        },
        {
          thumbnail: require('../assets/main2.jpg'),
          title: 'title',
          writer: 'lumi10',
          body: '설명합니다.',
          time: '00:00:27.00'
        },
        {
          thumbnail: require('../assets/main2.jpg'),
          title: 'title',
          writer: 'lumi10',
          body: '설명합니다.',
          time: '00:00:27.00'
        },
      ],
    }
  },
  methods: {
    getVideo() {
      console.log('1');
      this.recLists = [];
      this.$store.dispatch('list/getlist', {
        id: this.user.id,
        url: `ingvideo?{&Video_name=${this.plyVideo.title}&}`,
      });
      console.log(this.listLoading);
    },
    editVideo() {
      console.log(this.plyVideo.keylist);
      if (this.plyVideo.keylist !== '' && this.plyVideo.keylist !== 0) {
        this.recLists = this.plyVideo.keylist;
        console.log('inin');
      }
    },
  },
  mounted() {
    this.getVideo();
  },
  computed: {
    listLoading() {
      return this.$store.state.list.loading;
    },
  },
  watch: {
    'listLoading': 'editVideo',
  }
}
</script>

<style>
.videoCont {
  max-width: 88% !important;
  padding: 6px 12px;
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
  height: 66.2vh;
  overflow: auto;
}
</style>
