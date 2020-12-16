<template>
  <v-container class="headerCon">
    <v-app-bar
      class="appBar"
      absolute
      color="white"
      scroll-target="#scrolling-techniques-7"
      height="90"
      style="position: fixed;"
    >
      <v-toolbar-title>
        <img src="../assets/logo.png" width="60px" @click="$router.push('/')">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        filled
        dense
        rounded
        hide-details=""
        placeholder="검색어를 입력하세요."
        style="padding: 0px 4%;"></v-text-field>
      <!-- <v-btn
        icon
        >
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->
      <v-btn
        v-if="!login"
        depressed
        large
        class="ma-2 white--text"
        color="#BDBDBD"
        @click="$router.push('/signup')">
        회원가입
      </v-btn>
      <v-btn
        v-if="!login"
        outlined
        large
        class="ma-2"
        color="#BDBDBD"
        @click="loginFlag = true">
        로그인
      </v-btn>
      <v-menu
        bottom
        left
        offset-y
        min-width="200px"
        max-width="300px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-avatar
            v-if="login"
            v-bind="attrs"
            v-on="on">
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            >
          </v-avatar>
        </template>
        <v-divider color="#eee"></v-divider>
        <v-list>
            <v-list-item><h3>{{user.name}}</h3></v-list-item>
            <v-list-item>{{user.email}}</v-list-item>
            <v-divider></v-divider>
            <v-list-item link @click="$router.push('/VideoList')">
              <v-icon class="mr-2" color="#595959">mdi-arrow-up-bold-box-outline</v-icon>
              동영상 분석
            </v-list-item>
            <v-list-item link @click="$router.push('/SubtitleList')">
              <v-icon class="mr-2" color="#595959">mdi-message-text</v-icon>
              자막 분석
            </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-dialog
      v-model="loginFlag"
      width="30%">
      <v-card>
        <v-card-title style="width: 100%; text-align: right;">
          <v-spacer></v-spacer>
          <v-icon @click="loginFlag = false;">mdi-close</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text
          style="padding: 10%;">
          <v-text-field
            v-model="loginUser.id"
            prepend-inner-icon="mdi-account"
            outlined>
          </v-text-field>
          <v-text-field
            v-model="loginUser.pass"
            prepend-inner-icon="mdi-account-lock"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
            outlined>
          </v-text-field>
          <v-btn
            class="white--text"
            color="black"
            x-large
            width="100%">
            로그인
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
    
  </v-container>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        loginFlag: false,
        signupFlag: true,
        login: true,
        show: false,
        loginUser: {
          id: '',
          pass: '',
        },
        user: {
          name: '루미',
          email: 'lumi@didicast.com',
          img: '',
        },
      }
    },
  }
</script>

<style>
.headerCon {
  height: 90px;
  z-index: 2;
}
.appBar {
  padding: 0px 15%;
}
</style>
