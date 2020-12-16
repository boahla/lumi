<template>
  <v-container>
    <v-card>
      <div style="padding:5% 30%;">
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
            <v-text-field
              v-model="user.email"
              outlined
              required>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
              <v-input
              hide-details>
              나이
            </v-input>
            <v-text-field
              outlined
              required>
            </v-text-field>
          </v-col>
          <v-col>
              <v-input
              hide-details>
              성별
            </v-input>
            <v-radio-group
              v-model="sex"
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
            <v-checkbox
              v-for="(item, i) in 25"
              :key="i"
              v-model="interest"
              label="item"
              hide-details
              style="width: fit-content; display: inline-block;"
              value="i">
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
            <v-btn>
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
        age: 0,
        sex: '',
        interest: '',
        password: '',
        passwordCheck: '',
      }
    }
  },
}
</script>

<style>
</style>
