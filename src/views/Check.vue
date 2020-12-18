<template>
    <v-container class="check">
      <div style="width: 100%; height: 200px; background-color: lightblue;">
      </div>
      <v-tabs
        class="checkTab"
        style="z-index: 1;"
        :class="{'check_Tab' : scrollTab, 'check_Fix' : scrollFix}">
        <v-tab
          @click="move('One')">
          Item One
        </v-tab>
        <v-tab
          @click="move('Two')">
          Item Two
        </v-tab>
        <v-tab
          @click="move('Three')">
          Item Three
        </v-tab>
        <v-tab
          @click="move('Four')">
          Item Four
        </v-tab>
        <v-tab
          @click="move('Five')">
          Item Five
        </v-tab>
      </v-tabs>
      <v-row>
        <v-col
          cols="12"
          sm="5"
          md="7">
          <v-row class="rowOne" style="padding: 50px 0px;">
            <v-col>
              <h1>Item One</h1>
              <video src="" style="background-color: pink; width: 100%;"></video>
              <div class="oneText">
                Accent coach Nathan Mills demonstrates techniques to help you adjust your speech and speak English more clearly and naturally. Nathan divides speech into 5 areas: Intonation, Linking, Rhythm, Stress, and Articulation and spends significant time on areas that many learners of English find problematic.
                <br/>
                If you are an English learner below, then this class is designed for you.
                <br/>
                -Working professional in business, education, tourism, and research/sciences.
                -Undergraduate or graduate student preparing to study overseas where English is the medium of instruction and classroom participation; or for those preparing for TOEFL and IELTS exams.
                -Entertainer or presenter who wants to be more competitive for English-speaking roles or who want to thrive when interacting with international press.

                Upon completion of this course, the learner will be able to:

                -Flatten your accent so that you speak with a more natural rhythm. 
                -Be better understood when speaking English. 
                -Listen to English with increased accuracy. 
              </div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rowTwo" style="padding: 50px 0px;">
            <v-col>
              <h1>Item Two</h1>
              <video src="" style="background-color: green; width: 100%;"></video>
              <table class="">
                <tbody>
                  <td>
                    <v-img src="../assets/main1.jpg" style="object-fit: cover;max-width: 250px; min-width: 150px;"></v-img>
                  </td>
                  <td style="padding: 10px">
                    <h1>Blair Cook, Partner</h1>
                    <div>
                      Accent coach Nathan Mills demonstrates techniques to help you adjust
                      <br/>
                      If you are an English learner below, then this class is designed for you.
                      <br/>
                      -Flatten your accent so that you speak with a more natural rhythm. 
                      -Be better understood when speaking English. 
                      -Listen to English with increased accuracy. 
                    </div>
                  </td>
                </tbody>
              </table>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rowThree" style="padding: 50px 0px;">
            <v-col>
              <h1>
                Item Three
              </h1>
              <h2 style="text-align:right; padding:2%;">
                <font style="color: #1976d2">
                  {{curriculum.length}}
                </font>
                개 강의
              </h2>
              <v-simple-table class="checkTable">
                <template>
                  <tbody>
                    <tr
                      v-for="(item, i) in curriculum"
                      :key="i">
                      <td
                        width="70%"
                        style="font-size: 20px;">
                          {{item.title}}
                      </td>
                      <td
                        width="15%"
                        style="font-size: 21px; font-weight: bolder;">
                          {{item.price}}
                      </td>
                      <td
                        width="15%">
                        <v-btn
                          color="primary">
                          button
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rowFour" style="padding: 50px 0px;">
            <v-col>
              <h1>Item Four</h1>
              <v-row>
                <v-col cols="4" md="5" style="display:flex; align-items:center; text-align:center;">
                  <div style="margin: 0 auto;">
                    <h1>{{review}}</h1>
                    총 {{review}}개의 리뷰
                  </div>
                </v-col>
                <v-col>
                  <v-simple-table>
                    <template>
                      <tr
                        v-for="(item, i) in rating"
                        :key="i">
                        <td width="70%">
                          <v-rating
                            v-model="item.val"
                            large
                            readonly>
                          </v-rating>
                        </td>
                        <td>
                          {{item.per}}%
                        </td>
                      </tr>
                    </template>
                  </v-simple-table>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rowFive" style="padding: 50px 0px;">
            <v-col>
              <h1>Item Five</h1>
              <h2>
                <font style="color: #1976d2;">{{questions.length}}</font>개의 질문
              </h2>
              <v-simple-table v-if="questions.length > 0">
                <template>
                  <thead>
                    <tr>
                      <th style="font-size: 18px; font-weight: bolder;">제목</th>
                      <th style="font-size: 18px; font-weight: bolder;">글쓴이</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, i) in questions"
                      :key="i">
                      <td style="font-size: 18px;">
                        {{item.title}}
                      </td>
                      <td style="font-size: 18px;">
                        {{item.writer}}
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <div v-else style="text-align: center;">
                 <h4>
                   등록된 질문이 없습니다.
                 </h4>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="8"
          md="5">
          <v-card
            fluid
            style="position: fixed; margin: 50px 0px;">
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-title>
              Title
            </v-card-title>
            <v-card-subtitle>
              hello i'm lumi~~~~
            </v-card-subtitle>
            <v-card-text>
              <v-btn>Enter</v-btn>
              <v-divider></v-divider>
              개 강의 총 45:33
            </v-card-text>
          </v-card>
          <!-- <div style="width: 100%; height: 20px; background-color: green;">

          </div> -->
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'Check',
    data() {
      return {
        scrollTab: true,
        scrollFix: false,
        curriculum: [
          {
            title: 'lesson 1: basic',
            price: '1,300',
          },
          {
            title: 'lesson 2: ddong',
            price: '1,500',
          },
          {
            title: 'lesson 3: review',
            price: '2,100',
          },
        ],
        review: 0,
        rating: {
          1: {
            val: 1,
            per: 0.00,
          },
          2: {
            val: 2,
            per: 0.00,
          },
          3: {
            val: 3,
            per: 0.00,
          },
          4: {
            val: 4,
            per: 0.00,
          },
          5: {
            val: 5,
            per: 0.00,
          },
        },
        questions: [
          {
            title: '질문있습니당',
            writer: '루미',
          },
          {
            title: '또 있습니다.',
            writer: '루미2',
          },
        ],
      }
    },
    methods: {
      move(num) {
        var location = document.querySelector('.row' + num).offsetTop;
        window.scrollTo({top:location, behavior:'smooth'});
      },
      scroll() {
        const checkTab = document.querySelector('.checkTab').offsetTop;
        const scrollTop = window.scrollY;
        if (checkTab <= scrollTop) {
          this.scrollFix = true;
          this.scrollTab = false;
        } else {
          this.scrollFix = false;
          this.scrollTab = true;
        }
      },
    },
    mounted() {
      window.addEventListener('scroll', this.scroll);
      console.log(this.$route);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.scroll);
    },
  }
</script>

<style>
.check {
  max-width: 1430px !important;
  padding: 0px !important;
}
.v-tabs-bar {
  height: 70px;
}
.check_Tab {
  border-top: solid 1px lightgray;
  border-bottom: solid 1px lightgray;
}
.check_Fix {
  position: fixed;
  top: 70px;
  width: 67.7%;
  border-bottom: solid 1px lightgray;
}
.oneText {
  padding: 15px 0px;
  line-height: 32px;
}
h1 {
  padding-bottom: 15px;
}
.checkTable >>> td{
  font-size: 16px !important;
}
</style>
