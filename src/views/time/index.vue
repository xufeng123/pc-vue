<template>
  <div class="page-time app-container">
    <div>
      <h3>1.时间组件（普通,没有时间范围,返回值为日期格式）</h3>
      <v-date-picker
        @date-change="timeRangeChange"
      />
      <h3>2.时间组件（时间有时间范围,返回值为时间戳）</h3>
      <v-date-picker
        :picker-options="pickerOptions"
        format-type="timestamp"
        @date-change="timeRangeChange"
      />
    </div>
  </div>
</template>

<script>
import vDatePicker from '@/vendor/time/v-date-picker'

export default {
  name: 'PageTime',
  components: { vDatePicker },
  data() {
    return {
      calendar: '',
      timestamp: '',
      pickerOptions: {
        disabledDate: (time) => {
          const curDate = (new Date()).getTime()
          const one = 31 * 24 * 3600 * 1000
          const oneMonths = curDate + one
          return time.getTime() < Date.now() - 24 * 60 * 60 * 1000 || time.getTime() > oneMonths
        }
      }
    }
  },
  methods: {
    timeRangeChange(startTime, endTime) {
      console.warn(startTime, endTime, '00000000000')
    }
  }
}
</script>
