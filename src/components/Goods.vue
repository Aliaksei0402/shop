<template>
  <div class="goods card-deck">
    <div class="content" v-if="look === 'table'">
      <TableView v-for="good in goods" :key="good.id" :good="good" @dVisible="onSelectProduct" />
    </div>

    <el-dialog
      :title="product.name"
      :visible.sync="dialogVisible"
      v-if="product !== null"
      width="30%"
    >
      <p class="card-text">{{product.desc}}</p>
      <Colors :colors="product.colors" v-if="product !== null" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="notVisible">Отменить</el-button>
        <el-button type="primary" @click="addToCart(product)">Добавить в корзину</el-button>
      </span>
    </el-dialog>

    <div v-if="look === 'list'">
      <LinesView v-for="good in goods" :key="good.id" :good="good" />
    </div>
  </div>
</template>

<script>
import LinesView from "./LinesView";
import TableView from "./TableView";
import Colors from "./Colors";


export default {
  name: "Goods",

  /**
   * @param {Object} product выбранный продукт (для pop-up)
   * @param {Boolean} dialogVisible отображение pop-up
   */
  data() {
    return {
      product: null,
      dialogVisible: false,
    }
  },

  props: {
    goods: Array,
    look: String,
  },

  components: {
    TableView,
    LinesView,
    Colors
  },

  methods: {
    /**
     * @param {Object} item выбранный продукт (для pop-up)
     * @description отоюражение pop-up выбранного товара
     */
    onSelectProduct(item) {
      this.dialogVisible = true;
      this.product = item;
    },

    /**
    * @description скрытие pop-up
    */
    notVisible() {
      this.dialogVisible = false;
      this.product = null;
    },

    /**
    * @param {Object} product товар, добавляемый в корзину
    * @description добавление товара в корзину, запись в localStorage
    */
    addToCart(product) {
      this.notVisible();
      if (this.$store.state.selectedColor === null) {
        this.open2();
      } else {
        const item = Object.assign({}, product);
        item.image = this.$store.state.selectedColor.colorUrl;
        this.$store.state.sumPrice += Number(product.price);
        this.$store.state.itemsInCart.push(item);
        localStorage.setItem("sumPrice", JSON.stringify(this.$store.state.sumPrice));
        localStorage.setItem("itemsInCart", JSON.stringify(this.$store.state.itemsInCart));
        this.$store.state.selectedColor = null;
        this.open1();
      }
    },

    /**
    * @description https://element.eleme.cn/#/en-US/component/notification
    */
    open2() {
      this.$notify({
        title: 'Выберите цвет',
        message: 'Не добавлен в корзину',
        type: 'warning'
      });
    },

    /**
    * @description https://element.eleme.cn/#/en-US/component/notification
    */
    open1() {
      this.$notify({
        title: 'Добавлен в корзину',
        type: 'success'
      });
    },
  }
}
</script>