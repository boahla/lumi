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
              tile
              height="40px"
              color="rgba(0, 0, 0, 0.3)">
              확인
            </v-btn>
          </v-col>
          <v-col>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <vue-plyr>
              <video>
                <source />
                  </video>
            </vue-plyr>
          </v-col>
          <v-col>
            <vue-plyr>
              <video>
                <source />
              </video>
            </vue-plyr>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>dddd: 00%</p>
            <p>dddd: 00%</p>
            <p>dddd: 00%</p>
          </v-col>
          <v-col>
            <p>dddd: 00%</p>
            <p>dddd: 00%</p>
            <p>dddd: 00%</p>
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
      }
    },
    methods: {
      saveComp() {
        console.log('dfdfddf');
      },
    },
  }
</script>

<style>
.videoComCon {
  max-width: 1300px !important;
}
.vidSelect {
  display: inline-block;
  width: 89.56%;
  border-radius: 0px !important;
}
.compBtn {
  float: right;
  width: 10%;
}
</style>
