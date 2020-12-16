<template>
  <v-container>
    <v-card>
      <v-row
        style="
          height: 400px;
          background-color: #eaeaea;
          display:flex;
          align-items:center;">
        <v-col>
          <v-file-input
            show-size
            truncate-length="15"
          ></v-file-input>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          style="max-width: 300px; min-width: 250px;"
        >
          <v-card
            style="max-width: 300px; min-width: 250px;">
            <v-img
              class="white--text align-end"
              style="width: auto; background-color: gray;"
              height="200px"
              :src="item.img"
            >
              <v-card-title></v-card-title>
            </v-img>
            <v-card-title>{{item.title}}</v-card-title>
            <v-card-subtitle>{{item.body}}</v-card-subtitle>
            <v-card-text
              style="text-align: right;">
              {{item.writer}}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'SubtitleList',
  data() {
    return {
      videoFile: '',
      slides: [
        require('../assets/main1.jpg'),
        require('../assets/main2.jpg'),
        require('../assets/main3.jpg'),
        require('../assets/main4.jpg'),
        require('../assets/main5.jpg'),
        require('../assets/main1.jpg'),
        require('../assets/main2.jpg'),
        require('../assets/main3.jpg'),
        require('../assets/main4.jpg'),
        require('../assets/main5.jpg'),
        require('../assets/main1.jpg'),
        require('../assets/main2.jpg'),
        require('../assets/main3.jpg'),
        require('../assets/main4.jpg'),
        require('../assets/main5.jpg'),
      ],
      items: [
        {
          img: require('../assets/main1.jpg'),
          title: 'title',
          writer: 'lumi1',
          body: '설명합니다.',
        },
        {
          img: require('../assets/main3.jpg'),
          title: 'title',
          writer: 'lumi2',
          body: '설명합니다.',
        },
        {
          img: require('../assets/main2.jpg'),
          title: 'title',
          writer: 'lumi3',
          body: '설명합니다.',
        },
        {
          img: require('../assets/main2.jpg'),
          title: 'title',
          writer: 'lumi4',
          body: '설명합니다.',
        },
        {
          img: require('../assets/main3.jpg'),
          title: 'title',
          writer: 'lumi5',
          body: '설명합니다.',
        },
        {
          img: require('../assets/main4.jpg'),
          title: 'title',
          writer: 'lumi6',
          body: '설명합니다.',
        },
        {
          img: require('../assets/main5.jpg'),
          title: 'title',
          writer: 'lumi7',
          body: '설명합니다.',
        },
        {
          img: require('../assets/main5.jpg'),
          title: 'title8',
          writer: 'lumi',
          body: '설명합니다.',
        },
        {
          img: require('../assets/main1.jpg'),
          title: 'title',
          writer: 'lumi9',
          body: '설명합니다.',
        },
        {
          img: require('../assets/main2.jpg'),
          title: 'title',
          writer: 'lumi10',
          body: '설명합니다.',
        },
      ],
    }
  },
}
</script>

<style>
.row {
  margin: 0px !important;
}
</style>
