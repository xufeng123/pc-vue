<template>
  <div class="page-toast app-container">
    <div>
      <h3>Message消息提示</h3>
      <el-button :plain="true" @click="openMessage('info')">消息</el-button>
      <el-button :plain="true" @click="openMessage('success')">成功</el-button>
      <el-button :plain="true" @click="openMessage('warning')">警告</el-button>
      <el-button :plain="true" @click="openMessage('error')">错误</el-button>
    </div>
    <div>
      <h3>MessageBox 弹框</h3>
      <el-button type="text" @click="openBox">点击打开 Message Box</el-button>
    </div>
  </div>
</template>

<script>
import confirm from '@/vendor/toast/v-confirm'

export default {
  name: 'PageToast',
  methods: {
    openMessage(type) {
      this.$message[type]('消息内容')
    },
    openBox() {
      confirm('提示内容', '提示title').then(() => {
        this.$message.success('确认')
      }).catch(() => {
        this.$message.warning('取消')
      })
    }
  }
}
</script>


