// import router from '../../router'
import index from '../index'

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
        })
        .catch((res) => {
          console.log('fail', res);
        })
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
