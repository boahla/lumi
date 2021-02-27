<template>
  <v-container class="videoComCon">
    <v-card
      class="comCard"
      outlined
      color="white">
        <v-row
          style="border-bottom: solid 1px rgba(0, 0, 0, 0.12);">
          <v-col>
            <h3>키프레임 추출</h3>
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
                  동영상 선택
                </v-tab>
                <v-tab>
                  <v-icon left>
                    mdi-file-document-multiple-outline
                  </v-icon>
                  파일 선택
                </v-tab>
                <v-tab-item class="tabitem">
                  <v-card flat>
                    <v-row>
                      <v-col
                        cols="10">
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
                      </v-col>
                      <v-col
                        cols="2">
                        <v-btn
                          class="compBtn white--text"
                          depressed
                          height="40px"
                          color="rgba(0, 0, 0, 0.3)"
                          @click="uploadVideo('select')">
                          확인
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-tab-item>
                <v-tab-item class="tabitem">
                  <v-card flat>
                    <v-row>
                      <v-col
                        cols="10">
                        <v-file-input
                          v-model="file"
                          outlined
                          hide-details
                          dense
                        >
                        </v-file-input>
                      </v-col>
                      <v-col
                        cols="2">
                        <v-btn
                          class="compBtn white--text"
                          depressed
                          height="40px"
                          color="rgba(0, 0, 0, 0.3)"
                          @click="uploadVideo('file')">
                          확인
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </div>
          </v-col>
        </v-row>
        <v-row v-if="show" class="rowShow">
          <v-col cols="6" class="comCol">
            <v-card outlined>
              <v-card-title>기존 서비스 <span v-show="!listLoading1">: {{videoOrigin.TimeSpend}}</span></v-card-title>
              <div v-show="listLoading1" class="loading">
                <v-progress-circular
                  :size="60"
                  :width="6"
                  color="blue"
                  indeterminate
                  style="padding-top: 42vh;"
                ></v-progress-circular>
              </div>
              <div v-show="!listLoading1" class="videoBox">
                <v-row>
                  <v-col>
                    <vue-plyr ref="plyVideo.keylist">
                      <video
                        :src="videoOrigin.vidpath"
                        type="video/mp4"
                        >
                      </video>
                    </vue-plyr>
                  </v-col>
                  <v-col>
                     <v-list class="videoList">
                      <v-item-group
                        multiple
                      >
                        <v-row>
                          <v-col
                            v-for="(item, i) in videoOrigin.keyframes"
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
                
              </div>
            </v-card>
          </v-col>
          <v-col cols="6" class="comCol">
            <v-card outlined>
              <v-card-title>개선 서비스 <span v-show="!listLoading2">: {{videoBetter.TimeSpend}}</span></v-card-title>
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
                <v-row>
                  <v-col>
                    <vue-plyr ref="plyVideo.keylist">
                      <video
                        :src="videoBetter.vidpath"
                        type="video/mp4"
                        >
                      </video>
                    </vue-plyr>
                  </v-col>
                  <v-col>
                     <v-list class="videoList">
                      <v-item-group
                        multiple
                      >
                        <v-row>
                          <v-col
                            v-for="(item, i) in videoBetter.keyframes"
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
              </div>
            </v-card>
          </v-col>
        </v-row>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';
  export default {
    name: 'Compare',
    data() {
      return {
        // plyVideo: this.$store.state.list,
        hostOrigin: 'http://113.198.230.17/keyframe/',
        hostBetter: 'http://113.198.230.13/keyframe/',
        videoOrigin: '',
        videoBetter: '',
        listLoading1: false,
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
        file: [],
      }
    },
    methods: {
      async originVideo(data) {
        console.log(`${this.hostOrigin}${data}`);
        try {
          await axios
          .get(`${this.hostOrigin}${data}`,
            {
              headers: {
              "Access-Control-Allow-Origin": "*",
            }
          })
          .then((res) => {
            this.videoOrigin = res.data;
            console.log(this.videoOrigin.timeSpend);
          })
        } catch(err) {
          console.log(err);
        } finally {
          console.log('done');
          this.listLoading1 = false;
        }
      },
      async betterVideo(data) {
        console.log(`${this.hostBetter}${data}`);
        try {
          await axios
          .get(`${this.hostBetter}${data}`,
            {
              headers: {
              "Access-Control-Allow-Origin": "*",
            }
          })
          .then((res) => {
            this.videoBetter = res.data;
            console.log(this.videoBetter);
          })
        } catch(err) {
          console.log(err);
        } finally {
          console.log('done');
          this.listLoading2 = false;
        }
      },
      getVideo() {
        this.recLists = [];
        this.listLoading1 = true;
        this.listLoading2 = true;
        this.originVideo(this.$store.state.list.keyvideo);
        this.betterVideo(this.$store.state.list.keyvideo);
      },
      uploadVideo(mode) {
        this.show = true;
        if ( mode === 'select') {
          this.$store.commit('list/KEYVIDEO_SET', this.vidSelect);
        } else if ( mode === 'file' ) {
          const fileInfo = this.file.name.substr(0, this.file.name.length - 4);
          this.$store.commit('list/KEYVIDEO_SET', {
            state: fileInfo,
            url: fileInfo,
          });
        }
        this.getVideo();
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
.compBtn {
  width: 60%;
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
.tabitem .col {
  padding: 0px !important;
  text-align: center;
}
</style>
