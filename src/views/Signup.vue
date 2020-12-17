<template>
  <v-container>
    <v-card
      outlined
      color="white">
      <div style="width: 45%; margin: 0 auto;">
        <v-row style="padding-top: 3%;">
          <v-col>
            <h2>회원가입</h2>
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
              required>
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
                style="width: 20%"
                outlined
                required>
              </v-text-field>
              <p style="padding:1%; font-size: 20px;">@</p>
              <v-select
                label="이메일을 선택하세요."
                filled
                :items="emails"
                style="width: 30%;"
                single-line>
              </v-select>
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
              row
              mandatory>
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
            <v-checkbox
              v-for="(item, i) in interests"
              :key="i"
              v-model="user.interest"
              :label="item.name"
              hide-details
              style="width: fit-content; display: inline-block;"
              :value="item.name">
            </v-checkbox>
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
              type="password">
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
              type="password">
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
              class="white--text">
              확인
            </v-btn>
          </v-col>
        </v-row>
        <!-- <v-row style="background-color: pink;">
          <v-col>
            {{user.interest}}
          </v-col>
        </v-row>
        <v-row style="background-color: skyblue;">
          <v-col>
            {{user.gender}}
          </v-col>
        </v-row> -->
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
        birth: new Date().toISOString().substr(0, 10),
        gender: null,
        interest: [],
        password: '',
        passwordCheck: '',
      },
      emails: [
        'naver.com',
        'gmail.com',
      ],
      interests: [
        {
          name: '1',
        },
        {
          name: '2',
        },
        {
          name: '3',
        },
      ],
      rules: {
        empty: value => !!value || '비밀번호를 입력하세요.',
      },
    }
  },
}
</script>

<style>
.v-input {
  padding-bottom: 1%;
  font-weight: bolder;
}
</style>
