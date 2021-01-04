<template>
  <v-container class="videoCont">
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
          <iframe :src="plyVideo.url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <!-- <video width="100%" controls="controls" :src="plyVideo.url" autoplay></video> -->
          <h3 style="padding: 15px">{{plyVideo.title}}</h3>
        </v-col>
        <v-col
          cols="4">
          <v-input
            hide-details="">
            <h3>추천 동영상</h3>
          </v-input>
          <v-divider></v-divider>
          <v-list class="videoList" :key="plyVideo.title">
            <v-list-item-group>
              <v-list-item
                v-for="(item, i) in recLists"
                :key="i"
                @click="videoLists(item)"
                class="vidListItem">
                <v-list-item-action class="itemValue">
                  {{item.per}}%
                </v-list-item-action>
                <v-list-item-avatar
                  tile
                  width="45%"
                  height="100%"
                  style="margin: 5px 10px;">
                  <v-img
                    :src="item.thumbnail">
                  </v-img>
                </v-list-item-avatar>
                <v-list-item-content class="videoItemCont">
                  <h3>{{item.title}}</h3>
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
      absolute: true,
      recLists : [],
    }
  },
  methods: {
    videoLists(item) {
      this.$store.commit('list/VIDEO_SET', item);
      this.getVideo();
      this.$router.push(`/Video`);
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
            per: (Number.parseFloat(sl[2]) * 100).toFixed(0),
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
.videoCont .v-list-item__content {
  align-items: start !important;
  align-self: start !important;
  padding: 5% 0px !important;
}
/* .videoItemCont {
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  height: 6.3em;
} */
.videoCont .v-list-item__action {
  margin-right: 0px !important;
}
.videoList {
  height: 66.2vh;
  overflow: auto;
}
/* .vidListItem {
  height: 140px;
} */
</style>
