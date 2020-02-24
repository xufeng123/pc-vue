<template>
  <div class="btn-page app-container">
    <h3>基础用法</h3>
    <div class="btn-group">
      <div class="btn1">
        <v-button name="篮框白底" type="normal" />
      </div>
      <div class="btn1">
        <v-button name="蓝底白字" type="normal-bg" />
      </div>
      <div class="btn1">
        <v-button name="删除按钮" type="del" />
      </div>
      <div class="btn1">
        <v-button name="特殊蓝色" type="sb" />
      </div>
    </div>
    <h3>禁用状态</h3>
    <div class="btn-group">
      <div class="btn1">
        <v-button name="篮框白底" disabled type="normal" />
      </div>
      <div class="btn1">
        <v-button name="蓝底白字" disabled type="normal-bg" />
      </div>
      <div class="btn1">
        <v-button name="删除按钮" disabled type="del" />
      </div>
      <div class="btn1">
        <v-button name="特殊蓝色" disabled type="sb" />
      </div>
    </div>
    <h3>防重复点击</h3>
    <div class="btn-group">
      <div class="btn1">
        <v-button name="篮框白底" type="normal" :disabled="btnFlag" @click="handleActive" />
      </div>
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
    handleActive() {
      this.btnFlag = true
      setTimeout(() => {
        this.btnFlag = false
      }, 2000)
    }
  }
}
</script>

<style lang="scss">
  @import "@/styles/mixin.scss";

  .btn-page {
    width: 100%;
    .btn-group {
      @include flex;
      .btn1 {
        width: 100px;
        height: 40px;
        margin-right: 20px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>
