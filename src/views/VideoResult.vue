<template>
  <v-container class="videoCont">
    <!-- listLoading -->
    <v-overlay
      :absolute="absolute"
      :value="listLoading"
      opacity="0.4"
    >
      <v-progress-circular
        :size="90"
        :width="10"
        color="white" 
        indeterminate
      ></v-progress-circular>
    </v-overlay>
    <v-card
      outlined
      color="white"
      >
      <v-row style="padding: 2% 0px !important;">
        <v-col
          cols="8"
          style="height: 100%;">
          <vue-plyr ref="plyVideo.keylist">
            <video 
              :key="plyVideo.keylist.vidpath">
              <source
                type="video/mp4">
            </video>
          </vue-plyr>
          <!-- :src="plyVideo.keylist.vidpath" -->
          <!-- src="../videos/2.mp4" -->
          <h3 style="padding: 20px 15px 5px 15px;">{{plyVideo.keyvideoText}}</h3>
          <h4 v-if="!listLoading" style="padding: 0px 15px;">시간 : {{plyVideo.keylist.TimeSpend}}</h4>
        </v-col>
        <v-col
          cols="4">
          <v-input
            hide-details="">
            <h3>Keyf  rame</h3>
          </v-input>
          <v-divider></v-divider>
          <v-list class="videoList">
            <v-item-group
              multiple
            >
              <v-row>
                <v-col
                  v-for="(item, i) in recLists.keyframes"
                  :key="i"
                  cols="12"
                  md="6"
                  style="padding: 2px;"
                >
                  <v-item>
                    <v-img
                      :src="item"
                      height="150"
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
      absolute: true,
      recLists : [],
    }
  },
  methods: {
    getVideo() {
      this.recLists = [];
      this.$store.dispatch('list/getkeyframe', {
        url: `${this.$store.state.list.keyvideo}`,
      });
      console.log(this.listLoading);
    },
    editVideo() {
      console.log(this.plyVideo.keylist);
      if (this.plyVideo.keylist !== '' && this.plyVideo.keylist !== 0) {
        this.recLists = this.plyVideo.keylist;
      }
    },
  },
  mounted() {
    console.log('videoResult', this.plyVideo.keylist);
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
