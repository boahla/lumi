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
          <h3>데이터 처리 속도 비교</h3>
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
              <v-select
                v-model="videoFile"
                return-object
                :items="videoItems"
                item-value="state"
                item-text="text">
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
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'VideoList',
  data() {
    return {
      videoFile: null,
      videoWarning: false,
      videotimeout: 2000,
      errortext: '파일을 선택하세요.',
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
    videoSubmit() {
      if (this.videoFile) {
        this.$store.commit('list/KEYVIDEO_SET', this.videoFile);
        this.$router.push(`/VideoResult`);
      } else {
        this.videoWarning = true;
      }
    },
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
