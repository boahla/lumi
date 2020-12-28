import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from '@/store/modules/user.js'
import list from '@/store/modules/list.js'

const store = new Vuex.Store({
  modules: {
    // 키: 값 형태로 저장됩니다.
    user: user,
    list: list
  }
})

export default store
