<template>
  <div class="arithmetic-page app-container">
    <h3>1.冒泡</h3>
  </div>
</template>

<script>
export default {
  created() {
    let arr = [2, 34, 5, 67, 33, 11, 99]
    this.getBubbling(arr)
  },
  methods: {
    getSort(arr) { // 数组排序
      let arr1 = arr.sort(function(a, b) { // 从小到大
        return a - b
      })
      let arr2 = arr.sort(function(a, b) { // 从大到小
        return b - a
      })
      console.warn(arr1, arr2)
    },
    getBubbling(arr) { // 冒泡排序
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j + 1]
            arr[j + 1] = arr[j]
            arr[j] = temp
          }
        }
      }
      console.warn(arr, '-----------')
    }
  }
}
</script>
