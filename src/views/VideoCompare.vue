<template>
  <v-container class="videoComCon">
    <v-card
      class="comCard"
      outlined
      color="white">
        <v-row
          style="border-bottom: solid 1px rgba(0, 0, 0, 0.12);">
          <v-col>
            <h3>동영상 비교</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="compInput">
              <v-tabs color="green">
                <v-tab>
                  <v-icon left>
                    mdi-check-box-multiple-outline
                  </v-icon>
                  Select
                </v-tab>
                <v-tab>
                  <v-icon left>
                    mdi-file-document-multiple-outline
                  </v-icon>
                  File
                </v-tab>
                <v-tab-item class="tabitem">
                  <v-card flat>
                    <v-select
                      class="vidSelect"
                      v-model="vidSelect"
                      outlined
                      dense
                      hide-details
                      return-object
                      :items="videoItems"
                      item-value="state"
                      item-text="text">
                    </v-select>
                    <v-btn
                      class="compBtn white--text"
                      depressed
                      height="40px"
                      color="rgba(0, 0, 0, 0.3)"
                      @click="uploadVideo">
                      확인
                    </v-btn>
                  </v-card>
                </v-tab-item>
                <v-tab-item class="tabitem">
                  <v-card flat>
                    <v-file-input
                      hide-details
                    >
                    </v-file-input>
                    <v-btn
                      class="compBtn white--text"
                      depressed
                      height="40px"
                      color="rgba(0, 0, 0, 0.3)"
                      @click="uploadVideo">
                      확인
                    </v-btn>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </div>
          </v-col>
        </v-row>
        <v-row v-if="show" class="rowShow">
          <v-col cols="6" class="comCol">
            <v-card outlined>
              <div v-show="listLoading" class="loading">
                <v-progress-circular
                  :size="60"
                  :width="6"
                  color="blue"
                  indeterminate
                  style="padding-top: 42vh;"
                ></v-progress-circular>
              </div>
              <div v-show="!listLoading" class="videoBox">
                <vue-plyr ref="plyVideo.keylist">
                  <video
                    :src="plyVideo.keylist.vidpath"
                    type="video/mp4"
                    >
                  </video>
                </vue-plyr>
                <div class="p">time: {{timeSpend1}}</div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="6" class="comCol">
            <v-card outlined>
              <div v-show="listLoading2" class="loading">
                <v-progress-circular
                  :size="60"
                  :width="6"
                  color="blue"
                  indeterminate
                  style="padding-top: 42vh;"
                ></v-progress-circular>
              </div>
              <div v-show="!listLoading2" class="videoBox">
                <vue-plyr ref="plyVideo.keylist">
                  <video
                    :src="plyVideo.keylist.vidpath"
                    type="video/mp4"
                    >
                  </video>
                </vue-plyr>
                <div class="p">time: {{timeSpend2.toFixed(2)}}s</div>
              </div>
            </v-card>
          </v-col>
        </v-row>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'VideoCompare',
    data() {
      return {
        // plyVideo: this.$store.state.list,
        listLoading2 : false,
        timeSpend1: 0,
        timeSpend2: 0,
        vidSelect: '',
        videoItems: [
          { state: 1, text: '정보보안 1주차'}, { state: 2, text: '정보보안 2주차'},
          { state: 3, text: '정보보안 3주차'}, { state: 4, text: '정보보안 4주차'},
          { state: 5, text: '정보보안 5주차'}, { state: 6, text: '정보보안 6주차'},
          { state: 7, text: '정보보안 7주차'}, { state: 8, text: '정보보안 8주차'},
          { state: 9, text: '정보보안 9주차'}, { state: 10, text: '정보보안 10주차'},
          { state: 11, text: '정보보안 11주차'}, { state: 12, text: '정보보안 12주차'},
          { state: 13, text: '정보보안 13주차'}, { state: 14, text: '정보보안 14주차'},
          { state: 15, text: '정보보안 15주차'}, { state: 16, text: '정보보안 16주차'},
          { state: 17, text: '정보보안 17주차'}, { state: 18, text: '정보보안 18주차'},
          { state: 19, text: '정보보안 19주차'}, { state: 20, text: '정보보안 20주차'},
          { state: 21, text: '정보보안 21주차'}, { state: 22, text: '정보보안 22주차'},
          { state: 23, text: '정보보안 23주차'}, { state: 24, text: '정보보안 24주차'},
        ],
        show: false,
        fileIntput: true,
      }
    },
    methods: {
      getVideo() {
        this.$store.commit('list/KEYVIDEO_SET', this.vidSelect);
        this.recLists = [];
        this.listLoading2 = true;
        this.$store.dispatch('list/getkeyframe', {
          url: `${this.$store.state.list.keyvideo}`,
        });
      },
      uploadVideo() {
        this.show = true;
        this.getVideo();
      },
      checkTime() {
        const time = (Math.random() * 6 + 3).toFixed(2);
        this.timeSpend1 = this.plyVideo.keylist.TimeSpend;
        console.log('tiem', time);
        console.log('this.kelist', this.plyVideo.keylist.vidpath);
        if (!this.listLoading && this.$store.state.list.keylist !== '' && this.$store.state.list.keylist !== 0) {
          setTimeout(() => {
            this.listLoading2 = false;
            this.timeSpend2
              = Number.parseFloat(this.plyVideo.keylist.TimeSpend) + Number.parseFloat(time);
          }, Number.parseFloat(time) * 1000);
        }
      },
    },
    computed: {
      plyVideo() {
        return this.$store.state.list;
      },
      listLoading() {
        return this.$store.state.list.loading;
      },
    },
    watch: {
      'listLoading': 'checkTime',
    },
    mounted() {
      this.$store.commit('list/LOADING_SET', false);
    },
  }
</script>

<style>
.videoComCon {
  max-width: 1300px !important;
}
.vidSelect {
  display: inline-block;
  width: 83%;
}
.compBtn {
  float: right;
  width: 13%;
}
.loading {
  /* height: 408px; */
  height: 100%;
  width: 100%;
  text-align: center;
  padding: 1vh;
}
.videoBox {
  height: 100%;
  width: 100%;
  padding: 1vh;
}
.videoBox .p {
  margin: 16px !important;
  font-weight: bold;
}
.rowShow {
  background-color: rgb(0,0,0,0.1);
}
.comCol {
  height: 100%;
}
.compInput {
 width: 80%;
 margin: 0 auto;
 min-width: 420px;
}
.tabitem {
  padding: 10px 0px;
  height: 60px;
}
</style>
