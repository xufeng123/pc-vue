<template>
  <div class="message-box app-container">
    <ul>
      <li>
        <div class="btn-div"><v-button type="normal-bg" name="默认样式" @click="confirm1" /></div>
      </li>
      <li>
        <div class="btn-div"><v-button type="normal-bg" name="无标题" @click="confirm2" /></div>
      </li>
      <li>
        <div class="btn-div"><v-button type="normal-bg" name="点击弹出confirm" @click="confirm3" /></div>
      </li>
    </ul>
  </div>
</template>

<script>
import vButton from '@/vendor/button/v-button'
import MessageBox from '@/vendor/message-box/v-message-box'

export default {
  name: 'MessageBox',
  components: { vButton },
  methods: {
    confirm1() {
      MessageBox.alert('请检查你的网络设置', '发送申请失败')
    },
    confirm2() {
      MessageBox.alert('请检查你的网络设置请检查');
    },
    confirm3() {
      MessageBox.confirm('确定执行此操作?', '提示').then(act => {
        this.$message('您点击了确认~')
      }).catch(act => {
        this.$message('您点击了取消~')
      })
    }
  }
}
</script>

<style lang="scss">
  .message-box {
    width: 100%;
    height: 100%;
    ul {
      li {
        margin-bottom: 20px;
        .btn-div {
          width: 200px;
          height: 40px;
        }
      }
    }
  }
</style>
