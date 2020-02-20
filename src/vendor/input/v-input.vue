<template>
  <div class="v-input">
    <input
      :placeholder="placeholder"
      :maxlength="maxLength"
      :disabled="disabled"
      :class="['input', {'input__red': errorShow}, {'input__disabled': disabled}]"
      @input="changeValue"
      @blur="blurValue"
    />
    <p v-if="errorText" class="error-text">{{ errorText }}</p>
  </div>
</template>

<script>
import regular from '@/regular/index'

export default {
  name: 'VInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    maxLength: {
      type: String,
      default: ''
    },
    regType: { // 限制输入 1.email 2.mobile 3.idCard 4.numText 5.text 6.number 7.noNum
      type: String,
      default: ''
    },
    regBlur: { // 正则验证 1.email 2.mobile 3.idCard 4.numText 5.text 6.number 7.noNum
      type: String,
      default: ''
    },
    isRequire: { // 是否必填
      type: Boolean,
      default: false
    },
    disabled: { // 不可输入
      type: Boolean,
      default: false
    },
    errorType: { // 错误提示方式
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      errorShow: false,
      errorText: ''
    }
  },
  methods: {
    changeValue(event) { // 限制输入
      event.target.value = event.target.value.replace(regular[this.regType], '')
      this.$emit('input', event.target.value)
    },
    blurValue(event) { // 失去焦点
      if (this.isRequire) {
        if (!event.target.value) {
          this.errorShow = true
        } else {
          this.errorShow = false
        }
      } else if (this.regBlur && !regular[this.regBlur].reg.test(event.target.value)) {
        this.errorShow = true
        if (this.regBlur) {
          if (this.errorType) {
            this.errorText = `请输入正确的${regular[this.regBlur].name}`
          } else {
            this.$message.error('请输入正确的' + regular[this.regBlur].name)
          }
        }
      } else {
        this.errorShow = false
      }
    }
  }
}
</script>

<style lang="scss">
  .v-input {
    width: 100%;
    .input {
      width: 100%;
      padding: 5px;
      border: 1px solid rgba(237,238,244,1);
      border-radius: 4px;
      &::-webkit-input-placeholder {
        color: #B5B6BE;
      }
      &__red {
        border: 1px solid #E75235;
        border-radius: 4px;
      }
      &__disabled {
        background: rgba(237,238,244,1);
      }
    }
    .error-text {
      color: #E75235;
      font-size: 10px;
      margin-top: 5px;
    }
  }
</style>
