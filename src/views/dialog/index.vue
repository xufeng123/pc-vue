<template>
  <div class="page-dialog app-container">
    <div class="dialog-btn">
      <v-button name="demo" @click="getDialog"></v-button>
    </div>
    <div class="dialog-demo">
      <v-dialog
        title-msg="Demo"
        box-width="320px"
        :is-show="isShow"
        @click="confirm"
        @close="closeLogDialog"
      >
        <div slot="dialogCtx">
          <p>这就是一个弹框</p>
        </div>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import vButton from '@/vendor/button/v-button'
import vDialog from '@/vendor/dialog/v-dialog'

export default {
  components: { vButton, vDialog },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    getDialog() {
      this.isShow = true
    },
    confirm() { // 确定
      console.warn('确定')
    },
    closeLogDialog() { // 关闭
      this.isShow = false
    }
  }
}
</script>

<style lang="scss">
  .page-dialog {
    width: 100%;
    height: 100%;
    .dialog-btn {
      width: 120px;
      height: 48px;
    }
  }
</style>
