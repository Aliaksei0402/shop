<template>
  <div>
    <button type="text" class="btn btn-light cart" @click="dialogTableVisible = true">
      <img src="../../img/cart.png" />
      <span class="badge badge-light count">{{items.length}}</span>
      <span class="badge badge-light count">$ {{sumPrice}}</span>
    </button>

    <el-dialog title="Корзина товаров" :visible.sync="dialogTableVisible">
      <el-table v-if="items.length !== 0" :data="items">
        <el-table-column min-width="220">
          <div slot-scope="{row}" class="img-container">
            <img :src="row.image" alt="Agenda" />
          </div>
        </el-table-column>
        <el-table-column property="name" width="200"></el-table-column>
        <el-table-column width="150">
          <div slot-scope="{row}" class="td-number">
            <small>$</small>
            {{row.price}}
          </div>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
/**
   * @param {Array} items товары, добавленные в корзину
   * @param {Number} sumPrice общая стоимость всех товаров в корзине
   * @param {Boolean} dialogTableVisible отображение корзины по нажатию
   */
export default {
  name: "Cart",

  data() {
    return {
      items: this.$store.state.itemsInCart,
      sumPrice: this.$store.state.sumPrice,
      dialogTableVisible: false,
    };
  },
}
</script>