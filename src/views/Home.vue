<template lang="pug">
  #home
    b-container
      b-row
        b-col(cols="12")
          h1 {{ currentText }}
          h2 {{ timetext }}
          b-btn(variant="primary" v-if="status !== 1" @click="start")
            font-awesome-icon(:icon="['fas', 'play']")
          b-btn(variant="primary" v-if="status === 1" @click="pause")
            font-awesome-icon(:icon="['fas', 'pause']")
          b-btn(variant="primary" v-if="current.length > 0" @click="finish(true)")
            font-awesome-icon(:icon="['fas', 'step-forward']")
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      timer: 0
    }
  },
  computed: {
    // computed 也可以獲取值
    status: {
      get () {
        return this.$store.state.status
      },
      // computed 也可以改值
      set (value) {
        this.$store.commit('changeStatus', value)
      }
    },
    current () {
      return this.$store.state.current
    },
    currentText () {
      let result = ''
      if (this.current.length > 0) {
        result = this.current
      } else if (this.todos.length > 0) {
        result = '點擊開始'
      } else {
        result = '沒有事項'
      }

      return result
    },
    timeleft () {
      return this.$store.state.timeleft
    },
    alarm () {
      return this.$store.state.alarm
    },
    todos () {
      return this.$store.state.todos
    },
    timetext () {
      const m = Math.floor(this.timeleft / 60)
      const s = Math.floor(this.timeleft % 60)
      return `${m} : ${s}`
    }
  },
  methods: {
    start () {
      // 不是暫停繼續，且待辦有東西時才把 todos 的第一個變成 current
      if (this.status !== 2 && this.todos.length > 0) {
        this.$store.commit('start')
      }
      if (this.current.length > 0) {
        this.status = 1
        this.timer = setInterval(() => {
          this.$store.commit('countdown')
          if (this.timeleft <= -1) {
            this.finish(false)
          }
        }, 1000)
      }
    },
    finish (skip) {
      clearInterval(this.timer)
      this.status = 0
      this.$store.commit('finish')

      if (!skip) {
        const audio = new Audio()
        audio.src = './sounds/' + this.alarm
        audio.play()
      }

      if (this.todos.length > 0) {
        this.start()
      } else {
        alert('全部結束')
      }
    },
    pause () {
      clearInterval(this.timer)
      this.status = 2
    }
  }
}
</script>
