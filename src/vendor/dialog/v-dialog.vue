<template>
  <div class="v-message-box">
    <el-dialog
      :title="titleMsg"
      :visible.sync="isVisible"
      :width="boxWidth"
      :show-close="isShowClose"
      :close-on-click-modal="false"
      @close="close"
    >
      <span v-if="ctxMsg" v-html="ctxMsg"></span>
      <slot name="dialogCtx"></slot>
      <div slot="footer" class="v-message-box__footer">
        <div v-if="isCanShow" class="cancel-btn btn-margin">
          <v-button :name="canText" @click="isVisible = false" />
        </div>
        <div v-if="isConShow" class="confirm-btn">
          <v-button :name="conText" type="normal-bg" @click="confrim" />
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import vButton from '@/vendor/button/v-button'

export default {
  components: { vButton },
  props: {
    titleMsg: {
      type: String,
      default: ''
    },
    ctxMsg: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    },
    boxWidth: {
      type: String,
      default: '400px'
    },
    isCanShow: {
      type: Boolean,
      default: true
    },
    canText: {
      type: String,
      default: '取消'
    },
    isConShow: {
      type: Boolean,
      default: true
    },
    conText: {
      type: String,
      default: '确定'
    },
    isShowClose: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isVisible: false
    }
  },
  watch: {
    isShow(val) {
      if (val) {
        this.isVisible = true
      } else {
        this.isVisible = false
      }
    }
  },
  created() {
    this.isVisible = this.isShow
  },
  methods: {
    close() {
      this.$emit('close')
    },
    confrim() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
  @import "@/styles/mixin.scss";

  .v-message-box {
    width: 100%;
    .el-dialog__header {
      height: 70px;
      line-height: 70px;
      padding: 0 30px;
      .el-dialog__headerbtn {
        top: 25px !important;
        right: 36px;
      }
      .el-dialog__title {
        font-size: 22px;
      }
    }
    .el-dialog__body {
      padding: 10px 30px 30px !important;
      font-size:16px;
      color: #4F5161;
      font-weight: 500;
    }
    .el-dialog__footer {
      padding: 10px 30px 20px;
    }
    &__footer {
      @include flex;
      justify-content: flex-end;
      .cancel-btn, .confirm-btn {
        width: 56px;
        height: 30px;
      }
      .btn-margin {
        margin-right: 20px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>
