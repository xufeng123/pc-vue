<template>
  <div :class="['v-button', 'v-button__' + size, 'v-button__' + type, disabled ? 'v-button__' + type + '-disabled' : '']" @click.stop="handelClick">
    <div class="v-button__name">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    name: { // 按钮名称
      type: String,
      default: ''
    },
    type: { // normal-> 正常（篮框白底）normal-bg -> 正常（蓝底白字） del -> 删除的颜色（橙色） sb -> sb颜色（淡蓝）
      type: String,
      default: 'normal'
    },
    disabled: { // 这个状态也可以做防重复提交
      type: Boolean,
      default: false
    },
    size: { // 按钮大小
      type: String, // medium / small / mini
      default: ''
    }
  },
  methods: {
    handelClick() {
      if (!this.disabled) {
        this.$emit('click')
      }
    }
  }
}
</script>

<style lang="scss">
  .v-button {
    width: inherit;
    height: inherit;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    line-height: 1;
    border-radius: 4px;
    cursor: pointer;
    &__medium {
      padding: 13px 16px;
      font-size: 14px;
    }
    &__small {
      padding: 9px 16px;
      font-size: 14px;
    }
    &__mini {
      padding: 6px 12px;
      font-size: 12px;
    }
    &__cancel {
      color: #A8AAB1;
      background:rgba(226,228,230,1);
      border: 1px solid rgba(226,228,230,1);
      &:hover {
        background: #BBBDC4;
      }
      &-disabled {
        opacity: 0.3;
        &:hover {
          cursor: not-allowed;
        }
      }
    }
    &__normal {
      color: #046DBB;
      border:1px solid rgba(4,109,187,1);
      background: #fff;
      &:hover {
        background: #E6F1FA;
      }
      &-disabled {
        opacity: 0.3;
        &:hover {
          cursor: not-allowed;
        }
      }
    }
    &__normal-bg {
      color: #fff;
      // border:1px solid #0068B6;
      background: #0068B6;
      &:hover {
        background: #1B90E8;
      }
      &-disabled {
        opacity: 0.3;
        &:hover {
          cursor: not-allowed;
        }
      }
    }
    &__del {
      color: #E75235;
      border:1px solid #E75235;
      background: #fff;
      &:hover {
        background: #fFECE8;
      }
      &-disabled {
        opacity: 0.3;
        &:hover {
          cursor: not-allowed;
        }
      }
    }
    &__sb { // 特殊蓝色
      color: #0068B6;
      background: #D3E6F5;
      &:hover {
        background: #D3E6F5;
      }
      &-disabled {
        opacity: 0.3;
        &:hover {
          cursor: not-allowed;
        }
      }
    }
    &:active {
      opacity: 0.7;
    }
  }
</style>
