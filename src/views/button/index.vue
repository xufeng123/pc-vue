<template>
  <div class="btn-page app-container">
    <h3>基础用法</h3>
    <div class="btn-group">
      <div>
        <v-button name="mini" :loading="true" type="normal" size="mini" />
      </div>
      <div>
        <v-button name="small" :loading="true" type="normal-bg" size="small" />
      </div>
      <div>
        <v-button name="medium" :loading="true" type="del" size="medium" />
      </div>
      <div class="btn1">
        <v-button name="自定义" type="sb" />
      </div>
    </div>
    <h3>禁用状态</h3>
    <div class="btn-group">
      <div class="btn1">
        <v-button name="篮框白底" disabled :loading="true" type="normal" />
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
  created() {
    console.warn('-------inputPage----------')
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
      >div {
        margin-right: 20px;
        &:last-child {
          margin-right: 0;
        }
      }
      .btn1 {
        width: 120px;
        height: 40px;
        // line-height: 40px;
      }
    }
  }
</style>
