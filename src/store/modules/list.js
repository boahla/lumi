// import router from '../../router'

const state = {
  video: {
    title: '',
    url: 'no',
  }
};
  
const mutations = {
  VIDEO_SET(state, payload) {
    state.video.title = payload.title;
    state.video.url = payload.url;
  },
  // VIDEOLIST_SET(state, payload) {
  // },
};
  
// const actions = {
//   };
  
export default {
  namespaced: true,
  state,
  mutations,
  // actions,
};
  