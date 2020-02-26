<template>
  <div class="page-dialog app-container">
    <div>
      <ul>
        <li class="li-boder">
          <h3>基础用法</h3>
          <v-button name="点击打开Dialog" type="normal" size="small" @click="getDialog" />
        </li>
        <li class="li-boder">
          <h3>内嵌表单</h3>
          <v-button name="点击打开内嵌Form表单Dialog" type="normal" size="small" @click="getFormDialog" />
        </li>
      </ul>
    </div>
    <div class="dialog-demo">
      <v-dialog
        title-msg="Dialog基础用法"
        box-width="320px"
        ctx-msg="这就是一个弹框"
        :is-show="isShow"
        @click="confirm"
        @close="closeLogDialog"
      >
      </v-dialog>
      <v-dialog
        title-msg="内嵌Form表单Dialog"
        box-width="320px"
        :is-show="isFormShow"
        :is-can-show="false"
        @click="confirmForm"
      >
        <div slot="dialogCtx">
          <el-form :model="form">
            <el-form-item label="活动名称">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
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
      isShow: false,
      isFormShow: false,
      form: {
        name: '',
        region: ''
      }
    }
  },
  methods: {
    getDialog() {
      this.isShow = true
    },
    getFormDialog() {
      this.isFormShow = true
    },
    confirmForm() {
      this.isFormShow = false
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
    .li-boder {
      padding-bottom: 20px;
      border-bottom: 1px solid #dddee3;
    }
  }
</style>
