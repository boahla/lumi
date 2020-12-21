<template>
  <v-container>
    <v-card
      outlined
      color="white">
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
              이름
            </v-input>
            <v-text-field
              v-model="user.name"
              outlined
              required
              dense
              :rules="[rules.nameempty]">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-input
              hide-details>
              이메일
            </v-input>
            <v-row>
              <v-text-field
                v-model="user.email"
                outlined
                required
                dense
                :rules="[rules.emailempty]">
              </v-text-field>
              <!-- <p style="padding:1%; font-size: 20px;">@</p>
              <v-select
                v-model="user.emailadd"
                label="이메일을 선택하세요."
                filled
                :items="emails"
                style="width: 30%;"
                single-line
                dense>
              </v-select> -->
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
              <v-input
              hide-details>
              생년월일
            </v-input>
            <v-menu
              ref="birthFlag"
              v-model="birthFlag"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
              dense
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="user.birth"
                  persistent-hint
                  v-bind="attrs"
                  @blur="user.birth"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="user.birth"
                no-title
                @input="birthFlag = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="4">
              <v-input
              hide-details>
              성별
            </v-input>
            <v-radio-group
              v-model="user.gender"
              row>
              <v-radio
                label="남"
                value="m"
              ></v-radio>
              <v-radio
                label="여"
                value="w"
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
              v-model="user.interest"
              row>
              <v-radio
                v-for="(item, i) in interests"
                :key="i"
                :label="item.label"
                :value="item.value"
                >
              </v-radio>
            </v-radio-group>
            <!-- <v-checkbox
              v-for="(item, i) in interests"
              :key="i"
              v-model="user.interest"
              :label="item.label"
              hide-details
              style="width: fit-content; display: inline-block;"
              :value="item.name">
            </v-checkbox> -->
          </v-col>
        </v-row>
        <v-row>
          <v-col>
              <v-input
              hide-details>
              비밀번호
            </v-input>
            <v-text-field
              v-model="user.pass"
              outlined
              required
              type="password"
              dense
              :rules="[rules.passempty, rules.jo]">
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
              v-model="user.passCheck"
              outlined
              required
              type="password"
              dense
              :rules="[passCheck => passCheck === user.pass || '비밀번호가 일치하지 않습니다.']">
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
        name: '',
        email: '',
        emailadd: '',
        birth: '',
        gender: '',
        interest: '',
        pass: '',
        passCheck: '',
      },
      birthFlag: false,
      emails: [
        'naver.com',
        'gmail.com',
      ],
      interests: [
        { 
          label: '1',
          value: 'a',
        },
        {
          label: '2',
          value: 'b',
        },
        {
          label: '3',
          value: 'c',
        },
        {
          label: '4',
          value: 'd',
        }
      ],
      rules: {
        passempty: value => !!value || '비밀번호를 입력하세요.',
        nameempty: value => !!value || '이름을 입력하세요.',
        emailempty: value => !!value || '이메일을 입력하세요.',
        jo: value => /(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/.test(value) || '영문, 숫자, 기호의 조합으로 8자 이상 만들어져야합니다.',
      },
    }
  },
  methods: {
    signupBtn() {
      console.log('signupBtn', this.user);
      this.$router.push('/');
      // let arr = new Array();
      // this.user.forEach(element => {
      //   let data = new Object();
      //   data.
      // });
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
