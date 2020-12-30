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
          <iframe :src="plyVideo.url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <!-- <video width="100%" controls="controls" :src="plyVideo.url" autoplay></video> -->
          <h3>{{plyVideo.title}}</h3>
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
                v-for="(item, i) in recLists"
                :key="i"
                @click="videoLists(item)">
                <v-list-item-avatar
                  tile
                  width="45%"
                  height="100%">
                  <v-img
                    :src="item.thumbnail">
                  </v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <h3>{{item.title}}</h3>
                  <!-- <div style="padding: 3% 0%;">
                    {{item.writer}}
                  </div> -->
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
      user: this.$store.state.user.user,
      plyVideo: this.$store.state.list.video,
      recLists : [],
    }
  },
  methods: {
    videoLists(item) {
      this.$store.commit('list/VIDEO_SET', item);
      this.$router.push(`/Video/${item.title}`);
    },
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
      console.log(this.$store.state.list.homeList);
      if (this.$store.state.list.homeList !== '' && this.$store.state.list.homeList.length !== 0) {
        this.recLists = [];
        console.log('inin');
        const sub = this.$store.state.list.homeList.substring(2, this.$store.state.list.homeList.length - 2);
        const sp = sub.split('\', \'');
        sp.forEach(element => {
          const sl = element.split(': ');
          this.recLists.push({
            title: sl[0],
            url: `https://www.youtube.com/embed/${sl[1].substring(32, 43)}`,
            thumbnail: `https://img.youtube.com/vi/${sl[1].substring(32, 43)}/mqdefault.jpg`,
          })
        });
      }
      console.log('rectdd', this.recLists);
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
