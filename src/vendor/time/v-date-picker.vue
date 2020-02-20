<template>
  <div class="v-date-picker">
    <el-date-picker
      v-model="calendar"
      type="daterange"
      :picker-options="pickerOptions"
      range-separator="-"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      format="yyyy-MM-dd"
      :value-format="formatType"
      @change="dateRangeChange"
    />
  </div>
</template>

<script>
export default {
  name: 'VDatePicker',
  props: {
    pickerOptions: { // 时间选择范围
      type: Object,
      default: () => {}
    },
    formatType: { // 判断返回值是日期格式还是时间戳，timestamp：时间戳，日期格式：yyyy-MM-dd，默认是日期格式
      type: String,
      default: 'yyyy-MM-dd'
    }
  },
  data() {
    return {
      calendar: null
    }
  },
  methods: {
    dateRangeChange(dateArr) {
      dateArr ? this.$emit('date-change', dateArr[0], dateArr[1]) : this.$emit('date-change')
    }
  }
}
</script>

<style lang="scss">
  .v-date-picker {
    .el-date-editor .el-range-separator {
      padding: 0;
    }
  }
</style>
