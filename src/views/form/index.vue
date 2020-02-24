<template>
  <div class="page-form app-container">
    <h3>form表单校验</h3>
    <div class="input-group">
      <el-form ref="form" :model="ruleForm" :rules="rules" label-width="200px">
        <el-form-item label="只允许输入数字">
          <el-input v-model="ruleForm.number" v-reg-input:num placeholder="只允许输入数字" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="允许输入两位小数" prop="point">
          <el-input v-model="ruleForm.point" v-reg-input:point placeholder="允许输入两位小数" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="不允许输入数字" prop="noNum">
          <el-input v-model="ruleForm.noNum" v-reg-input:NAN placeholder="不允许输入数字" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="不允许输入特殊符号" prop="spl">
          <el-input v-model="ruleForm.spl" v-reg-input:spl placeholder="不允许输入特殊符号" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="不允许输入特殊符号和中文" prop="noZh">
          <el-input v-model="ruleForm.noZh" v-reg-input:noZh placeholder="不允许输入特殊符号和中文" class="input-width"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="form-btn">
      <v-button name="提交" @click="submit"></v-button>
    </div>
  </div>
</template>

<script>
import vButton from '@/vendor/button/v-button'

export default {
  components: { vButton },
  data() {
    return {
      ruleForm: {
        number: '',
        point: '',
        noNum: '',
        spl: '',
        noZh: ''
      },
      rules: {
        point: [
          { required: true, message: '请输入', trigger: 'blur' }
        ],
        noNum: [
          { required: true, message: '请输入', trigger: 'blur' }
        ],
        spl: [
          { required: true, message: '请输入', trigger: 'blur' }
        ],
        noZh: [
          { required: true, message: '请输入', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          return false;
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .page-form {
    .input-width {
      width: 300px;
    }
    .form-btn {
      width: 100px;
      height: 38px;
    }
  }
</style>
