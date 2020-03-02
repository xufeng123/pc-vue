<template>
  <!-- table组件 -->
  <div :class="['v-table', {'v-table-ui': uiClass}, {'v-table-border': !isBorder}]">
    <el-table
      ref="vtable"
      :key="tableKey"
      v-loading="listLoading"
      :data="listData"
      fit
      :border="isBorder"
      highlight-current-row
      :style="{'maxHeight': tMaxHeight, 'width': '100%'}"
      :height="tHeight"
      @selection-change="selectionChange"
    >
      <el-table-column v-if="isShowBox" type="selection" :selectable="getSelectAble" width="60px" align="center"></el-table-column>
      <el-table-column v-for="(row, index) in tableRow" :key="index" :label="row.name" :type="row.type" :min-width="row.minWidth" :width="row.width" :fixed="row.fixed" align="center">
        <!-- 表头的单独设置 -->
        <template v-for="(item, idx) in specialRows" slot="header">
          <div v-if="item.props == row.props" :key="idx" class="item">
            <span>{{ row.name }}</span>
            <el-tooltip v-if="tooltipShow" effect="light" :content="item.ctx" placement="bottom" class="row-tooltip">
              <img src="../../assets/remark.png" alt="">
            </el-tooltip>
          </div>
        </template>
        <!-- 特殊内容的设置 -->
        <template slot-scope="item">
          <span v-if="!(specialKeys && specialKeys.indexOf(row.props) > -1)">{{ item.row[row.props] }}</span>
          <div v-for="(special, idx) in specialKeys" :key="idx">
            <div v-if="row.props == special">
              <slot :name="special" :data="item.row" :list="row"></slot>
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    tableRow: {
      type: Array,
      default: () => []
    },
    listData: {
      type: Array,
      default: () => []
    },
    listLoading: {
      type: Boolean,
      default: false
    },
    tableKey: {
      type: String,
      default: 'vTable'
    },
    tHeight: {
      type: String,
      default: null
    },
    tMaxHeight: {
      type: String,
      default: ''
    },
    uiClass: {
      type: Boolean,
      default: false
    },
    isShowBox: {
      type: Boolean,
      default: false
    },
    isBorder: {
      type: Boolean,
      default: false
    },
    specialKeys: { // 特殊的td
      type: Array,
      default: () => []
    },
    specialRows: { // 特殊的td带提示
      type: Array,
      default: () => []
    },
    tooltipShow: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    getSelectAble(row) {
      console.warn(row, '999999999')
    },
    selectionChange(val) {
      this.$emit('handle-check', val)
    },
    selectAllRows() { // 全选的切换
      this.$refs.vTable.toggleAllSelection()
    },
    clearAll() { // 全选的清除
      this.$refs.vTable.clearSelection()
    }
  }
}
</script>

<style lang="scss">
  @import "@/styles/mixin.scss";

  .v-table {
    width: 100%;
    .el-table th>.cell {
      line-height: 23px;
      height: 23px;
    }
    .item {
      line-height: 23px;
      span {
        margin-right: 5px;
      }
    }
    .row-tooltip {
      width: 14px;
      position: absolute;
      top: 5px;
    }
    .el-table th.is-leaf{
      background: rgb(230, 232, 240);
      font-size: 14px;
      color: rgb(35, 37, 58);
    }
    .el-table th, .el-table tr {
      height: 50px;
    }
    .el-table__row {
      height: 60px !important;
    }
    .el-table__fixed-right::before, .el-table__fixed::before {
      height: 0;
    }
    .el-table__body-wrapper {
      min-height: auto;
      border-left: 1px solid #ebeef5;
      border-right: 1px solid #ebeef5;
    }
  }
  .v-table-border {
    .el-table__body {
      border-right: 1px solid #ebeef5!important;
    }
  }
  .v-table-ui {
    .el-table__row {
      height: 68px !important;
    }
  }
</style>
