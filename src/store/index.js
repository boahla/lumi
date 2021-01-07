import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

import user from '@/store/modules/user.js'
import list from '@/store/modules/list.js'

const state = {
  host: 'http://113.198.234.132:9994/', // 컴공 api
  host2: 'http://113.198.230.13/keyframe/', // 응소 api
  data: '',
};

const mutations = {
  DATA_SET(state, payload) {
    state.data = payload;
  },
};

const actions = {
  async api({ commit }, payload) {
    console.log('index api', `${state.host}${payload.url}`);
    try {
      state.data = [];
      let usehost = '';
      if (payload.host === 'es') {
        usehost = `${state.host2}${payload.url}`;
      } else {
        usehost = `${state.host}${payload.url}`;
      }
      await axios
      .get(usehost,
        {
          headers: {
          "Access-Control-Allow-Origin": "*",
        }
      })
      .then((res) => {
        commit('DATA_SET', res.data);
      })
    } catch(err) {
      console.log(err);
    } finally {
      console.log('done');
    }
  }
};

const store = new Vuex.Store({
  modules: {
    // 키: 값 형태로 저장됩니다.
    user: user,
    list: list
  },
  state,
  mutations,
  actions,
})

export default store
