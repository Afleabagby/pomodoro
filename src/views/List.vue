<template lang="pug">
    #list
        b-container
            b-row
                b-col(cols="12")
                    b-form-group(label="新增事項" invalid-feedback="請至少輸入兩個字" :state="state")
                        b-form-input(v-model="newtodo" trim :state="state" @keydown.enter="addTodo")
                    b-btn(variant="primary" @click="addTodo") 新增
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      newtodo: ''
    }
  },
  computed: {
    state () {
      if (this.newtodo.length === 0) {
        return null
      } else if (this.newtodo.length < 2) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    addTodo () {
      if (this.state) {
        this.$store.commit('addTodo', this.newtodo)
        this.newtodo = ''
      }
    }
  }
}
</script>
