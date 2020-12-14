<template>
  <v-container class="headerCon">
    <v-app-bar
      class="appBar"
      absolute
      color="white"
      elevation="3"
      scroll-target="#scrolling-techniques-7"
      height="90"
      style="position: fixed;"
    >
      <v-toolbar-title>
        <img src="../assets/logo.png" width="60px">
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
        color="#BDBDBD">
        로그인
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
  export default {
    name: 'Header',
    data: () => ({
    }),
  }
</script>

<style>
.headerCon {
  height: 90px;
}
.appBar {
  padding: 0px 280px;
}
</style>
