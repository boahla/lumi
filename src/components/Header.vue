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
        hide-details=""></v-text-field>
      <!-- <v-btn
        icon
        >
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->
      <v-btn
        depressed
        large
        class="ma-2 white--text"
        color="#BDBDBD">
        회원가입
      </v-btn>
      <v-btn
        outlined
        large
        class="ma-2"
        color="#BDBDBD"
        @click="login = true">
        로그인
      </v-btn>
    </v-app-bar>
    <v-dialog
      v-model="login"
      width="30%">
      <v-card>
        <v-card-title style="width: 100%; text-align: right;">
          <v-spacer></v-spacer>
          <v-icon @click="login = false;">mdi-close</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text
          style="padding: 10%;">
          <v-text-field
            v-model="user.id"
            prepend-inner-icon="mdi-account"
            outlined>
          </v-text-field>
          <v-text-field
            v-model="user.pass"
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
        login: false,
        show: false,
        user: {
          id: '',
          pass: '',
        }
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
  padding: 0px 10%;
}
</style>
