<template>
  <main>
    <input v-model="string" type="text">
    <button @click="changeArray">changeArray</button>
    <button @click="changeObject">changeObject</button>
    <pre>{{ array }}</pre>
    <pre>{{ object }}</pre>
  </main>
</template>

<script>
import { syncHistoryState } from './router'

export default {
  mixins: [
    syncHistoryState('string', 'array', 'object')
  ],

  data: () => ({
    string: '',
    array: [],
    object: {
      a: 1
    }
  }),

  methods: {
    changeArray() {
      this.array.push(Math.random())
    },

    changeObject() {
      this.object.a = Math.random()
    }
  }
}
</script>
