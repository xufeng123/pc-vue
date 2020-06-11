<template>
  <div class="page-proxy app-container">
    <h3>1.set or map 学习</h3>
    <h3>1.proxy学习</h3>
    <h3>2.Reflect学习</h3>
  </div>
</template>

<script>
export default {
  created() {
    this.mapFnc()
  },
  methods: {
    /**
     * set 和 map 的区别
     *
     */
    /**
     * Set和weakSet区别
     * 1.weakSet只针对对象，2.WeakSet 中的对象都是弱引用
     */
    setFnc() {
      var arr = [1, 2, 3, 4, 5, 1, 2, 3, 6]
      var arrSet = new Set(arr)
      console.warn(arrSet.entries())
    },
    weakSetFnc() {
      var ws = new WeakSet()
      ws.add({
        name: 'test'
      }).add({
        age: 28
      })
      console.warn(ws)
    },
    mapFnc() {
      var map = new Map()
      var set = new Set()
      console.warn(Object.prototype.toString.call(map), Object.prototype.toString.call(set))
    }
  }
}
</script>
