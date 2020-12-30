// import router from '../../router'
import index from '../index'
import Cookies from 'vue-cookies'

const state = {
  user: {
    flag: false,
    dialog: false,
    id: '',
    password: '',
  },
};

const mutations = {
  USER_SET(state, payload) {
    state.user.flag = true;
    state.user.id = payload.id;
    state.user.password = payload.password;
  },
  LOGIN_DIALOG_SET(state, payload) {
    state.user.dialog = payload;
  },
  LOGOUT(state) {
    state.user.flag = false;
    state.user.id = '';
    state.user.password = '';
  },
};

const actions = {
  async login({ commit }, payload) {
    index.dispatch(
      'api',
      {
        url: `login?{&id=${payload.id}&password=${payload.password}&}`
      })
        .then(() => {
          commit('USER_SET', payload);
          commit('LOGIN_DIALOG_SET', false);
          // Cookies
          Cookies.set('access_id', payload.id);
          Cookies.set('access_password', payload.password);
          // router.go(router.currentRoute);
        })
        .catch((res) => {
          console.log('fail', res);
        })
  },
  logout({ commit }) {
    commit('LOGOUT');
    Cookies.remove('access_id');
    Cookies.remove('access_password');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
