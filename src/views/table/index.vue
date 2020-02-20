<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="加载中..."
      border
      fit
      highlight-current-row
    >
      <v-table-column :table-label="tableLabel">
        <template slot-scope="item">
          <span>{{ item.data[item.list.props] }}</span>
        </template>
      </v-table-column>
    </el-table>
  </div>
</template>

<script>
import vTableColumn from '@/vendor/table/v-table-column'

export default {
  components: { vTableColumn },
  data() {
    return {
      list: [
        {
          time: '2019-08-28',
          content: '内容1',
          handle: '查看'
        },
        {
          time: '2019-08-28',
          content: '内容2',
          handle: '查看'
        },
        {
          time: '2019-08-28',
          content: '内容3',
          handle: '查看'
        }
      ],
      listLoading: true,
      tableLabel: [
        {
          label: '时间',
          props: 'time',
          fixed: 'left'
        },
        {
          label: '内容',
          props: 'content'
        },
        {
          label: '操作',
          props: 'handle'
        }
      ]
    }
  },
  created() {
  },
  mounted() {
    setTimeout(() => {
      this.listLoading = false
    }, 2000)
  },
  methods: {
  }
}
</script>
