<template>
  <div class="main-section">
    <Searching @find="findProducts" />
    <Sorting @sort="sort" />
    <Goods :goods="goods" :look="look" />
    <Pagination :current-page.sync="pageNumber" />
  </div>
</template>

<script>
import Searching from "./Searching";
import Goods from "./Goods";
import Sorting from "./Sorting";
import Pagination from "./Pagination";


export default {
  name: "MainSection",

  components: {
    Searching,
    Sorting,
    Goods,
    Pagination,
  },

  /**
   * @param {String} name имя товара, нечувствительно к регистру
   * @param {Number} maxPrice максимальная цена товара
   * @param {Number} minPrice минимальная цена товара
   * @param {Number} itemOnPage количество товаров на странице
   * @param {String} sortByPrice 'decrease' or 'increase' - ключевые слова для сортировки
   */
  data() {
    return {
      name: null,
      maxPrice: null,
      minPrice: null,
      itemOnPage: 8,
      sortByPrice: '',
    };
  },

  computed: {
    /**
     * @description получение всех товаров из БД
     */
    goods() {
      return this.$store.state.goods;
    },

    /**
     * @description вид карточек на странице
     */
    look() {
      return this.$store.state.look;
    },

    /**
     * @description открытая страница в данный момент
     */
    pageNumber() {
      return this.$store.state.pageNumber;
    }
  },

  watch: {
    /**
     * @description отслеживание изменения страницы
     */
    pageNumber() {
      this.search();
    }
  },

  methods: {
    /**
     * @param {Array} parameters список параметров для отображения результатов поиска
     * @description отображение результатов поиска по имения, мин цене и макс цене
     */
    findProducts(parameters) {
      this.name = parameters[0];
      this.minPrice = Number(parameters[1]);
      this.maxPrice = Number(parameters[2]);
      this.search();
    },

    /**
     * @description запрос на загрузку данных по параметрам из data
     */
    search() {
      this.$store.dispatch("loadGoods", {
        name: this.name,
        maxPrice: this.maxPrice,
        minPrice: this.minPrice,
        pageNumber: this.pageNumber,
        itemOnPage: this.itemOnPage,
        sortByPrice: this.sortByPrice,
      });
    },

    /**
     * @description переключение сортировки при нажатии на стрелки
     */
    sort() {
      this.sortByPrice = this.sortByPrice === "increase" ? "decrease" : "increase";
      this.search();
    }
  },

  /**
   * @description загрузка всех товаров
   */
  mounted() {
    this.search();
  }
}
</script>