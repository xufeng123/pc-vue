<template>
  <div class="page-form app-container">
    <h3>form表单校验</h3>
    <div class="input-group">
      <el-form ref="form" :model="ruleForm" :rules="rules" label-width="200px">
        <el-form-item label="只允许输入数字">
          <el-input v-model="ruleForm.number" v-reg-input:num placeholder="只允许输入数字" clearable class="input-width"></el-input>
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
        <el-form-item label="不允许空格" prop="blank">
          <el-input v-model="ruleForm.blank" v-reg-input:blank placeholder="不允许空格" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="正则匹配-手机号" prop="phone">
          <el-input v-model="ruleForm.phone" v-reg-input:num placeholder="手机号正则匹配" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="正则匹配-字母" prop="letter">
          <el-input v-model="ruleForm.letter" placeholder="匹配所有字母" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="计算长度" prop="word">
          <el-input v-model="ruleForm.word" placeholder="计算输入的长度" class="input-width"></el-input>
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
import { getLength } from '@/utils/utils'

export default {
  components: { vButton },
  data() {
    const checkPhone = (rule, value, callback) => {
      if (value) {
        // const reg = /^((-?)[0-9]{1,2},)*((-?)[0-9]{1,2})$/ // 1,2,3,-1,-11
        const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/ // 手机号
        if (reg.test(value)) {
          callback()
        } else {
          return callback(new Error('请输入手机号正确的格式'))
        }
      } else {
        return callback(new Error('请输入手机号'))
      }
    }
    const checkLetter = (rule, value, callback) => {
      if (value) {
        const reg = /^([a-zA-Z]{1,2}\,)*([a-zA-Z]{1,2})$/ // a,aa,
        if (reg.test(value)) {
          callback()
        } else {
          return callback(new Error('请输入字母'))
        }
      } else {
        return callback(new Error('请输入字母'))
      }
    }
    return {
      ruleForm: {
        regTest: '',
        number: '',
        point: '',
        noNum: '',
        spl: '',
        noZh: '',
        phone: '',
        letter: '',
        blank: '',
        price: '',
        word: ''
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
        ],
        blank: [
          { required: true, message: '请输入', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '请输入', trigger: 'blur' }
        ],
        phone: [
          { validator: checkPhone, trigger: 'blur' }
        ],
        letter: [
          { validator: checkLetter, trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    'ruleForm.word'(val) {
      console.warn(getLength(val))
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          return false
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
