<template>
  <div class="v-table-column">
    <el-table-column
      v-for="(item, idx) in tableLabel"
      :key="idx"
      :label="item.label"
      :width="item.width"
      :fixed="item.fixed"
      :type="item.type"
      align="center"
      :class-name="item.className"
    >
      <template slot-scope="scope">
        <slot :data="scope.row" :list="item" />
      </template>
    </el-table-column>
  </div>
</template>

<script>
export default {
  name: 'PtableColumn',
  props: {
    tableLabel: {
      type: Array,
      default: () => []
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss">
</style>
