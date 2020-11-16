import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

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
    timeleft: time,
    // 0 = 停止
    // 1 = 倒數中
    // 2 = 暫停
    status: 0
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
    },
    start (state) {
      if (state.isBreak) {
        state.current = '休息一下'
      } else {
        // .shift() 把陣列中第一個東西拉出來回傳
        state.current = state.todos.shift().name
      }
    },
    countdown (state) {
      state.timeleft--
    },
    finish (state) {
      state.finished.push(state.current)
      state.current = ''
      // 如果 todo 還有東西 false 改為 true
      if (state.todos.length > 0) {
        state.isBreak = !state.isBreak
      }
      state.timeleft = state.isBreak ? timeBreak : time
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
