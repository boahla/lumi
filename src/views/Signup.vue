<template>
  <v-container>
    <v-card
      outlined
      color="white">
      <v-snackbar
        v-model="warning"
        :timeout="warntimer"
        top
        color="red"
      >
        {{ errortext }}
        <template v-slot:action="{ attrs }">
          <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="warning = false"
          >
            <v-icon color="white">mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
      <div style="max-width: 550px; min-width: 450px; margin: 0 auto;">
        <v-row style="padding-top: 3%;">
          <v-col>
            <h3>회원가입</h3>
          </v-col>
        </v-row>
        <v-divider style="margin: 3% 0px;"></v-divider>
        <v-row>
          <v-col>
            <v-input
              hide-details>
              이메일
            </v-input>
            <v-row>
              <v-text-field
                v-model="user.id"
                outlined
                required
                dense
                :rules="[rules.emailempty]">
              </v-text-field>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
              <v-input
              hide-details>
              나이
            </v-input>
            <v-row>
              <v-text-field
                v-model="user.age"
                outlined
                required
                dense>
              </v-text-field>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-input
              hide-details>
              성별
            </v-input>
            <v-radio-group
              v-model="user.gen"
              row>
              <v-radio
                label="남"
                value="남"
              ></v-radio>
              <v-radio
                label="여"
                value="여"
              ></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-input
              hide-details>
              관심 분야
            </v-input>
            <v-radio-group
              v-model="user.inter"
              row>
              <v-radio
                v-for="(item, i) in interests"
                :key="i"
                :label="item"
                :value="item"
                style="width : 115px; height: 32px;"
                >
              </v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
              <v-input
              hide-details>
              비밀번호
            </v-input>
            <v-text-field
              v-model="user.password"
              outlined
              required
              type="password"
              dense
              :rules="[rules.passempty, rules.onlynumber]">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
              <v-input
              hide-details>
              비밀번호 확인
            </v-input>
            <v-text-field
              v-model="passCheck"
              outlined
              required
              type="password"
              dense
              :rules="[passCheck => passCheck === user.password || '비밀번호가 일치하지 않습니다.']">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
              width="100%"
              height="5vh"
              color="#9ba094"
              depressed
              class="white--text"
              @click="signupBtn">
              확인
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      user: {
        id: '',
        age: '',
        gen: '',
        inter: '',
        password: '',
      },
      passCheck: '',
      birthFlag: false,
      interests: [
        '문학','수학', '영어', '생물',
        '화학', '물리', '지구과학', '음악',
        '미술', '체육', '한국사', '법과 정치',
        '경제', '생활윤리', '한국지리', '세계지리',
        '세계사', '동아시아사', 'IT', '제2외국어',
      ],
      rules: {
        passempty: value => !!value || '비밀번호를 입력하세요.',
        nameempty: value => !!value || '이름을 입력하세요.',
        emailempty: value => !!value || '이메일을 입력하세요.',
        onlynumber: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.',
      },
      warning: false,
      warntimer: 2000,
      errortext: '',
    }
  },
  methods: {
    signupBtn() {
      let flag = false;
      for (let i in this.user) {
        if (this.user[i] === '') {
          this.warning = true;
          this.errortext = '모든 양식을 입력해주세요.';
          flag = false;
        } else {
          flag = true;
        }
      }
      if (flag) {
        this.$store.dispatch('api', {
          url: `signin?{&id=${this.user.id}&age=${this.user.age}&gen=${this.user.gen}&inter=${this.user.inter}&password=${this.user.password}&}`,
          host: 'cg',
        })
          .then(() => {
            if (this.$store.state.data === 'ID 중복') {
              this.warning = true;
              this.errortext = 'ID 중복입니다.';
            } else {
              this.$router.push('/');
            }
          })
      }
    },
  },
}
</script>

<style>
.v-input {
  padding-bottom: 1%;
  font-weight: bolder;
}
</style>
