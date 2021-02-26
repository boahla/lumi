<template>
  <v-container class="headerCon">
    <v-app-bar
      outlined
      class="appBar"
      height="70"
      style="position: fixed;"
    >
      <v-toolbar-title style="cursor: pointer; height:36px;">
        <img src="../assets/castio_logo.png" width="150px" @click="$router.push('/')">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-if="!user.flag"
        depressed
        large
        class="ma-2 white--text"
        color="#BDBDBD"
        @click="$router.push('/signup')">
        회원가입
      </v-btn>
      <v-btn
        v-if="!user.flag"
        outlined
        large
        class="ma-2"
        color="#BDBDBD"
        @click="loginDialog(true)">
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
            v-show="user.flag"
            v-bind="attrs"
            v-on="on">
            <v-icon large>mdi-account </v-icon>
          </v-avatar>
        </template>
        <v-divider color="#eee"></v-divider>
        <v-list>
            <v-list-item><h3>{{userNow.id}}</h3></v-list-item>
            <!-- <v-list-item>{{user.email}}</v-list-item> -->
            <v-divider></v-divider>
            <v-list-item link @click="$router.push('/VideoList')">
              <v-icon class="mr-2" color="#595959">mdi-arrow-up-bold-box-outline</v-icon>
              스트리밍 성능 비교
            </v-list-item>
            <v-list-item link @click="$router.push('/VideoCompare')">
              <v-icon class="mr-2" color="#595959">mdi-monitor-dashboard</v-icon>
              데이터 처리 속도 비교
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item link @click="logout">
              <v-icon class="mr-2" color="#595959">mdi-logout</v-icon>
              로그아웃
            </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-dialog
      v-model="user.dialog"
      width="25%">
      <v-card>
        <v-card-title style="width: 100%; text-align: right;">
          <v-spacer></v-spacer>
          <v-icon @click="loginDialog(false)">mdi-close</v-icon>
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
            v-model="loginUser.password"
            prepend-inner-icon="mdi-account-lock"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
            outlined>
          </v-text-field>
          <div style="color: red;">
            {{this.$store.state.user.loginfail}}
          </div>
          <v-btn
            class="white--text"
            color="black"
            x-large
            width="100%"
            @click="loginBtn">
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
      user: this.$store.state.user.user,
      show: false,
      loginUser: {
        id: '',
        password: '',
      },
    }
  },
  methods: {
    loginDialog(flag) {
      this.loginUser.id = '';
      this.loginUser.password = '';
      this.$store.commit('user/LOGINFAIL_SET', '');
      this.$store.commit('user/LOGIN_DIALOG_SET', flag);
    },
    loginBtn() {
      this.$store.dispatch('user/login', this.loginUser);
    },
    logout() {
      this.$store.dispatch('user/logout');
      this.$router.push('/');
    },
  },
  computed: {
    userNow() {
      return this.$store.state.user.user;
    },
  },
}
</script>

<style>
.headerCon {
  height: 70px;
  z-index: 2;
  padding: 0px !important;
}
.appBar {
  padding: 0px 15%;
  background-color: #ffffff !important;
  box-shadow: none !important;
}
</style>
