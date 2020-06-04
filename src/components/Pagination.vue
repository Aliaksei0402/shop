<template>
  <el-pagination
    class="pagination"
    background
    layout="prev, pager, next"
    :total="total"
    @current-change="handleCurrentChange"
  ></el-pagination>
</template>

<script>
export default {

  computed: {
    /**
     * @description вычисление количества страниц для pagination
     */
    total() {
      return this.$store.state.pages * 10;
    }
  },

  methods: {
    /**
     * @param {Number} page номер выбранной страницы
     * @description запрос на изменеие страницы
     */
    handleCurrentChange(page) {
      this.$store.dispatch('page', page);
    }
  }
}
</script>