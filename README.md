# vue-pilot-sync-history-state
Preserve data during browser reload and back/forward.


## Usage
router.js:
```js
import { PathRouter } from 'vue-pilot'
import initSync from 'vue-pilot-sync-history-state'

const router = new PathRouter({
  routes: [
    // ...
  ]
})

router.start()

const syncHistoryState = initSync(router)
export default router
export { router, syncHistoryState }
```

Page.vue:
```html
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
```

## API

```js
import initSync from 'vue-pilot-sync-history-state'

const syncHistoryState = initSync(router)
```

### initSync

Create a sync factory function.

router: the router object.

### syncHistoryState

```js
const mixin = syncHistoryState('foo', 'bar', ...)
```

Create a mixin.

Parameters are the name of the data you want to preserve.

## License
[MIT](LICENSE)
