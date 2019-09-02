<template>
  <main>
    <input v-model="name" type="text">
  </main>
</template>

<script>
import syncHistoryState from './syncHistoryState'

export default {
  mixins: [
    syncHistoryState('name', 'array', 'object')
  ],

  data: () => ({
    name: '',
    array: [],
    object: {}
  }),

  methods: {
    changeArray() {
      this.array.push(Date.now())
    },

    changeObject() {
      this.object[Date.now()] = Date.now()
    }
  }
}
</script>
