<template>
  <div v-if="value" class="v-message-box">
    <div class="v-message-shadow" @click.stop="handleAction('cancel')" />
    <transition name="msgbox-bounce">
      <div class="v-message-box__div">
        <div class="v-message-box__header">
          <h3 v-show="title !== ''">{{ title }}</h3>
          <div class="close-img" @click.stop="handleAction('cancel')" />
        </div>
        <div v-if="message !== ''" class="v-message-box__content">
          <p class="v-msgbox-message" v-html="message" />
        </div>
        <div class="v-message-box__footer">
          <div v-if="showCancelButton" class="footer-btn btn-cancel">
            <v-button :name="cancelText" type="normal" @click="handleAction('cancel')" />
          </div>
          <div v-if="showConfirmButton" class="footer-btn btn-confirm">
            <v-button :name="confirmText" type="normal-bg" @click="handleAction('confirm')" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import vButton from '@/vendor/button/v-button'

export default {
  name: 'VMessageBox',
  components: { vButton },
  props: {
    modal: {
      type: Boolean,
      default: true
    },
    confirmText: { // 确定按钮
      type: String,
      default: '确定'
    },
    cancelText: { // 取消按钮
      type: String,
      default: '取消'
    }
  },
  data() {
    return {
      value: '',
      title: '',
      message: '',
      showInput: false,
      showConfirmButton: true,
      showCancelButton: false,
      confirmButtonClass: '',
      cancelButtonClass: '',
      editorErrorMessage: null,
      callback: null
    }
  },
  computed: {
    confirmButtonClasses() {
      let classes = 'v-msgbox-btn v-msgbox-confirm ' + this.confirmButtonClass
      if (this.confirmButtonHighlight) {
        classes += ' v-msgbox-confirm-highlight'
      }
      return classes
    },
    cancelButtonClasses() {
      let classes = 'v-msgbox-btn v-msgbox-cancel ' + this.cancelButtonClass
      if (this.cancelButtonHighlight) {
        classes += ' v-msgbox-cancel-highlight'
      }
      return classes
    }
  },
  watch: {
    value(val) {
      this.handleInputType(this.inputType)
      if (val && this.$type === 'prompt') {
        setTimeout(() => {
          if (this.$refs.input) {
            this.$refs.input.focus()
          }
        }, 500)
      }
    }
  },
  mounted() {
    document.getElementById('app').appendChild(this.$el)
  },
  methods: {
    doClose() {
      this.value = false
      this._closing = true
      this.onClose && this.onClose()
      setTimeout(() => {
        if (this.modal && this.bodyOverflow !== 'hidden') {
          document.body.style.overflow = this.bodyOverflow
          document.body.style.paddingRight = this.bodyPaddingRight
        }
        this.bodyOverflow = null
        this.bodyPaddingRight = null
      }, 200)
      this.opened = false

      if (!this.transition) {
        this.doAfterClose()
      }
    },

    handleAction(action) {
      if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
        return
      }
      const callback = this.callback
      this.editorErrorMessage = ''
      this.editorErrorMessage = ''
      this.value = false
      callback(action)
    },

    validate() {
      this.editorErrorMessage = ''
      return true
    },

    handleInputType(val) {
      if (val === 'range' || !this.$refs.input) return
      this.$refs.input.type = val
    }
  }
}
</script>
<style lang="scss">
  .v-message-box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    &__div {
      width: 296px;
      padding-bottom: 20px;
      font-size: 16px;
      border-radius: 4px;
      border: 1px solid rgba(244,245,249,1);
      background:rgba(255,255,255,1);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10000;
    }
    &__header {
      width: 100%;
      // display: flex;
      padding: 0 20px;
      background: rgba(247,249,255,1);
      position: relative;
      h3 {
        // flex: 1;
        width: 100%;
        font-size: 16px;
        font-weight: 400;
        color:rgba(35, 37, 58, 0.8);
        line-height: 48px;
        text-align: center;
      }
      .close-img {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 20px;
        top: 13px;
        background: url("../../assets/close.png") center no-repeat;
        background-size: 18px 18px;
      }
    }
    &__content {
      width: 100%;
      padding: 27px 20px;
      p {
        text-align: center;
        color: #23253A;
        font-weight: 500;
      }
    }
    &__footer {
      padding: 3px 37px;
      display: flex;
      justify-content: center;
      align-items: center;
      .footer-btn {
        width: 90px;
        height: 36px;
      }
      .btn-cancel {
        margin-right: 40px;
      }
    }
  }
  .v-message-shadow {
    width: 100%;
    height: 100%;
    background:rgba(0,0,0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
  }
</style>
