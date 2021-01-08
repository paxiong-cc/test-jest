<template>
  <div>
    <Header @adds="add" />
    <div v-for="(item, idx) in list" :key="idx" style="display: flex">
      <div style="margin-right: 10px">{{ item }}</div>
      <input v-model="list[idx]" type="text" style="margin-right: 10px" />
      <div @click="deletes(idx)" class="delete" style="margin-right: 10px">-</div>
      <div @click="edit(idx)">edit</div>
    </div>
  </div>
</template>

<script>
import Header from './views/components/Header'

export default {
  components: {
    Header
  },

  data () {
    return {
      list: []
    }
  },

  methods: {
    add (val) {
      this.list.push(val)
    },
    deletes (idx) {
      this.list.splice(idx, 1)
    },
    edit (idx) {
      this.$refs[`list${idx}`].nodeName = 'iput'
      console.log(this.$refs[`list${idx}`])
    }
  }
}
</script>

<style>

</style>
