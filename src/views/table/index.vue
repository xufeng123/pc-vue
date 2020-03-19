<template>
  <div class="page-table app-container">
    <div>
      <h3>1.普通的table</h3>
      <v-table
        table-key="table1"
        :list-loading="false"
        :table-row="tableRow"
        :list-data="tableData"
      >
      </v-table>
    </div>
    <div>
      <h3>2.table的table-header</h3>
      <v-table
        table-key="table2"
        :list-loading="false"
        :table-row="tableRow"
        :list-data="tableData"
        :special-rows="specialRows"
      >
        <template slot="id">
          <span>88888888</span>
          <el-tooltip effect="light" content="999999999" placement="bottom" class="row-tooltip">
            <img src="../../assets/remark.png" alt="">
          </el-tooltip>
        </template>
      </v-table>
    </div>
    <div>
      <h3>3.table的table-content</h3>
      <v-table
        table-key="table3"
        :list-loading="false"
        :table-row="tableRow"
        :list-data="tableData"
        :special-keys="specialKeys"
      >
        <div slot="id" slot-scope="item" class="btn-div">
          <v-button name="点击" size="mini" @click="getInfo(item)"></v-button>
        </div>
      </v-table>
    </div>
  </div>
</template>

<script>
import vTable from '@/vendor/table/v-table'
import vButton from '@/vendor/button/v-button'
export default {
  components: { vTable, vButton },
  data() {
    return {
      tableRow: [
        {
          name: 'id',
          props: 'id'
        },
        {
          name: 'name',
          props: 'name'
        }
      ],
      tableData: [
        {
          id: 1,
          name: 'name1'
        },
        {
          id: 2,
          name: 'name2'
        },
        {
          id: 3,
          name: 'name3'
        },
        {
          id: 4,
          name: 'name4'
        }
      ],
      specialRows: ['id'],
      specialKeys: ['id']
    }
  },
  methods: {
    getInfo(val) {
      console.warn(val, '9999999')
    }
  }
}
</script>

<style lang="scss">
  .page-table {
    width: 100%;
    .btn-div {
      display: flex;
      justify-content: center;
    }
  }
</style>
