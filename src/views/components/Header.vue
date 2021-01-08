<template>
  <div class="ff">
    <input type="text" v-model="keyWord" @keyup.enter="add" data-test="input">
  </div>
</template>

<script>
export default {
  data () {
    return {
      keyWord: ''
    }
  },

  methods: {
    add () {
      this.$emit('adds', this.keyWord)
      this.keyWord = ''
    }
  }
}
</script>

<style>

</style>
