import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const time = parseInt(process.env.VUE_APP_TIME)
const timeBreak = parseInt(process.env.VUE_APP_TIME_BREAK)

export default new Vuex.Store({
  state: {
    alarm: 'alarm1.mp3',
    todos: [],
    current: '',
    finished: [],
    isBreak: false,
    timeleft: time
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
    },
    delTodo (state, index) {
      state.todos.splice(index, 1)
    },
    editTodo (state, index) {
      // 傳進來
      // edit 改為 false
      state.todos[index].edit = true
    },
    changeTodo (state, index) {
      state.todos[index].edit = false
      state.todos[index].name = state.todos[index].model
    },
    cancelTodo (state, index) {
      state.todos[index].edit = false
      state.todos[index].model = state.todos[index].name
    }
  },
  actions: {
  },
  modules: {
  }
})
