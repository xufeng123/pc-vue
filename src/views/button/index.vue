<template>
  <div class="btn-page app-container">
    <div class="btn1">
      <v-button name="禁止提交" type="normal" disabled @click="handleActive1" />
    </div>
    <div class="btn2">
      <v-button name="可点击" type="normal-bg" @click="handleActive2" />
    </div>
    <div class="btn3">
      <v-button name="防止重复提交" type="cancel" :disabled="btnFlag" @click="handleActive3" />
    </div>
  </div>
</template>

<script>
import vButton from '@/vendor/button/v-button'

export default {
  name: 'BtnPage',
  components: { vButton },
  data() {
    return {
      btnFlag: false
    }
  },
  methods: {
    handleActive1() {
      console.warn('已点击')
    },
    handleActive2() {
      console.warn('已点击')
    },
    handleActive3() {
      this.btnFlag = true
      setTimeout(() => {
        console.warn('现在可以点击')
        this.btnFlag = false
      }, 2000)
    }
  }
}
</script>

<style lang="scss">
  .btn-page {
    width: 100%;
    .btn1, .btn2, .btn3 {
      width: 100px;
      height: 50px;
      margin-bottom: 15px;
    }
    .btn3 {
      width: 130px;
    }
  }
</style>
