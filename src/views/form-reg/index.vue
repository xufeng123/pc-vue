<template>
  <div class="page-form-reg">
    <div class="add-form">
      <el-form ref="dataForm" :rules="rules" :model="model" label-position="left" class="formDia" label-width="200px">
        <div class="form-input">
          <el-form-item label="姓名" prop="name">
            <input type="text" v-model="model.name" v-reg-input:NAN placeholder="请输入姓名" class="el-input__inner" />
          </el-form-item>
          <p class="warning">只可以输入英文、中文和下划线（_）</p>
        </div>
        <div class="form-input">
          <el-form-item label="不允许输入特殊符号" prop="special">
            <input type="text" v-model="model.special" v-reg-input:spl placeholder="不允许输入特殊符号" class="el-input__inner" />
          </el-form-item>
          <p class="warning">不允许输入特殊符号</p>
        </div>
        <div class="form-input">
          <el-form-item label="不允许输入中文" prop="special">
            <input type="text" v-model="model.noChinese" v-reg-input:noZh placeholder="不允许输入特殊符号" class="el-input__inner">
          </el-form-item>
          <p class="warning">只允许输入数字和字母</p>
        </div>
        <div class="form-input">
          <el-form-item label="手机号" prop="mobile">
            <input type="text" v-model="model.mobile" v-reg-input:num placeholder="请输入手机号" class="el-input__inner" />
          </el-form-item>
          <p class="warning">只允许输入数字</p>
        </div>
        <div class="form-input">
          <el-form-item label="两位小数" prop="point">
            <input type="text" v-model="model.point" v-reg-input:point placeholder="请输入两位小数" class="el-input__inner" />
          </el-form-item>
          <p class="warning">只允许输入数字且最多输入两位小数</p>
        </div>
        <div class="form-input">
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="model.email" placeholder="请输入邮箱" />
          </el-form-item>
          <p class="warning">邮箱格式</p>
        </div>
        <div class="form-input">
          <el-form-item label="身份证" prop="idCard">
            <input v-model="model.idCard" v-reg-input:noZh placeholder="请输入身份证" type="text" class="el-input__inner" />
          </el-form-item>
          <p class="warning">身份证校验</p>
        </div>
        <div class="form-input">
          <el-form-item label="证件号" prop="cardNum">
            <el-input v-model="model.cardNum" v-reg-input:noZh placeholder="请输入证件号"></el-input>
            <!-- <input v-model="model.cardNum" v-reg-input:noZh placeholder="请输入证件号" type="text" class="el-input__inner" /> -->
          </el-form-item>
          <p class="warning">数字和字母的校验</p>
        </div>
      </el-form>
    </div>
    <div class="footer">
      <div class="footer-btn">
        <v-button name="取消" @click="regAboBtn" />
      </div>
      <div class="footer-btn">
        <v-button name="确认" @click="regConBtn" />
      </div>
    </div>
  </div>
</template>

<script>
import vButton from '@/vendor/button/v-button'
export default {
  name: 'PageFormReg',
  components: { vButton },
  data() {
    return {
      rules: {
        mobile: [
          { required: true, message: '请输入正确手机号', validator: this.checkMobile, trigger: 'blur' }
        ],
        email: [
          { required: false, message: '邮箱格式不对', trigger: 'blur', validator: this.checkEmail }
        ],
        idCard: [
          { required: false, validator: this.checkIdCard, trigger: 'blur' }
        ],
        cardNum: [
          { required: false, validator: this.checkCard, trigger: 'blur' }
        ]
      },
      model: {
        name: '',
        special: '',
        noChinese: '',
        mobile: '',
        email: '',
        idCard: '',
        cardNum: '',
        point: ''
      }
    }
  },
  methods: {
    checkMobile(rule, value, callback) {
      if (value) {
        const myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/
        if (value.match(myreg) == null) {
          return callback(new Error('请输入正确手机号'))
        } else {
          callback()
        }
      } else {
        callback(new Error('请输入正确手机号'))
      }
    },
    checkEmail(rule, value, callback) {
      if (value) {
        const myreg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
        if (value.match(myreg) == null) {
          return callback(new Error('请输入正确邮箱'))
        } else {
          callback()
        }
      } else {
        callback()
      }
    },
    checkIdCard(rule, value, callback) { // 身份证
      if (value) {
        const myreg = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
        if (value.match(myreg) == null) {
          return callback(new Error('请输入身份证号'))
        } else {
          callback()
        }
      } else {
        callback()
      }
    },
    checkCard(rule, value, callback) { // 证件号校验
      if (value) {
        const myreg = /^[a-zA-Z0-9]+$/
        if (value.match(myreg) == null) {
          return callback(new Error('请输入正确的证件号'))
        } else {
          callback()
        }
      } else {
        return callback(new Error('请填写证件号'))
      }
    },
    checkPoint(item, value, key, label) { // 允许输入两位小数
      if (label.isNumber) {
        item[key] = value.replace(/[^\d]/g, '')
      } else {
        item[key] = value.match(/^\d*(\.?\d{0,2})/g, '').toString()
      }
    },
    checkNum(item, value, key) { // 只允许输入数字
      item[key] = value.replace(/[^\d]/g, '')
    },
    regConBtn() { // 确认
      this.$refs['dataForm'].validate((valid) => {
        // if (valid) {
        // }
      })
    },
    regAboBtn() { // 取消
      this.$nextTick(() => {
        if (this.$refs['dataForm']) {
          this.$refs['dataForm'].clearValidate()
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/mixin.scss";

.page-form-reg {
  width: 100%;
  height: 100%;
  padding: 20px;
  .add-form {
    .el-form-item__label {
      padding: 0;
    }
    .form-input {
      @include flex;
      align-items: center;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
      .el-form-item {
        width: 360px;
        @include flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0;
        &__label {
          margin-right: 20px;
          text-align: right;
          line-height: 30px;
        }
        .el-form-item__content {
          line-height: 30px;
          width: 276px;
          margin-left: 0 !important;
        }
      }
      .warning {
        margin-left: 20px;
        color: red;
      }
    }
  }
  .footer {
    @include flex;
    justify-content: center;
    margin-top: 30px;
    .footer-btn {
      width: 100px;
      line-height: 40px;
      &:first-child {
        margin-right: 30px;
      }
    }
  }
}
</style>
