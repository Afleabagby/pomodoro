import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    alarm: 'alarm1.mp3',
    todos: []
  },
  mutations: {
    selectAlarm (state, data) {
      state.alarm = data
    },
    addTodo (state, data) {
      state.todos.push(
        {
          name: data,
          edit: false,
          model: data
        }
      )
    }
  },
  actions: {
  },
  modules: {
  }
})
