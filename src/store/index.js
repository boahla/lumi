import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

import user from '@/store/modules/user.js'
import list from '@/store/modules/list.js'

const state = {
  host: 'http://113.198.234.132:9994/',
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
      await axios
      .get(`${state.host}${payload.url}`,
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
