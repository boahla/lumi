// import axios from 'axios';
import index from '../index'

const state = {
  video: {
    title: '',
    url: 'no',
  },
  keyvideo: '',
  keyvideoText: '',
  keylist: [],
  homeList: [],
  loading: true,
};
  
const mutations = {
  VIDEO_SET(state, payload) {
    state.video.title = payload.title;
    state.video.url = payload.url;
  },
  VIDEOLIST_SET(state, payload) {
    state.homeList = payload;
  },
  LOADING_SET(state, payload) {
    state.loading = payload;
  },
  KEYVIDEO_SET(state, payload) {
    state.keyvideo = payload.state;
    state.keyvideoText = payload.text;
  },
  KEYLIST_SET(state, payload) {
    state.keylist = payload;
  },
};
  
const actions = {
  async getlist({ commit }, payload) {
      try {
        commit('LOADING_SET', true);
        await index.dispatch(
          'api',
          {
            url: payload.url,
            host: 'cg',
          })
            .then(() => {
              // console.log('list then', index.state.data);
              commit('VIDEOLIST_SET', index.state.data);
            })
      } catch (err) {
        console.log(err);
      } finally {
        commit('LOADING_SET', false);
      }
  },
  async getkeyframe({ commit }, payload) {
    try {
      commit('KEYLIST_SET', '');
      commit('LOADING_SET', true);
      await index.dispatch(
        'api',
        {
          url: payload.url,
          host: 'es',
        })
          .then(() => {
            // console.log('list then', index.state.data);
            commit('KEYLIST_SET', index.state.data);
          })
    } catch (err) {
      console.log(err);
    } finally {
      commit('LOADING_SET', false);
    }
}
};
  
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
  