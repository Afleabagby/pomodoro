<template lang="pug">
  #settings
    b-container
      b-row
        b-col(cols="12")
          b-table(:items="items" :fields="fields" @row-clicked="selectAlarm")
            //- cell({key})
            template(#cell(file)="data")
              audio(controls :src="'./sounds/'+data.item.file")
            template(#cell(select)="data")
              //- 如果file 是我們選的alarm，就顯示icon
              font-awesome-icon(v-if="data.item.file === alarm" :icon="['fas', 'check']")
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {
      items: [
        {
          name: '鬧鈴',
          file: 'alarm1.mp3'
        },
        {
          name: 'yay',
          file: 'yay.mp3'
        }
      ],
      fields: [
        {
          key: 'name',
          label: '名稱'
        },
        {
          key: 'file',
          label: '預覽'
        },
        {
          key: 'select',
          label: '選擇'
        }
      ]
    }
  },
  methods: {
    selectAlarm (item) {
      this.$store.commit('selectAlarm', item.file)
    }
  },
  computed: {
    alarm () {
      return this.$store.state.alarm
    }
  }
}
</script>
