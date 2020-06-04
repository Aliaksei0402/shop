<template>
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="good.image" class="card-img title-img" alt="good" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <div class="title-price">
            <h5 class="card-title">{{good.name}}</h5>
            <div class="card-text">
              <h4 class="text-muted price">$ {{good.price}}</h4>
            </div>
          </div>

          <p class="card-text">{{good.desc}}</p>
          <div class="list-view-img-price">
            <div>
              <Colors :colors="good.colors" />
            </div>
            <div>
              <button class="btn btn-primary" @click="addToCart(good)">Добавить в корзину</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Colors from "./Colors";

export default {
  name: "LinesView",

  components: {
    Colors,
  },

  props: {
    good: Object,
  },

  methods: {
    /**
     * @param {Object} good товар, добавляемый в корзину
     * @description добавление товара в корзину, запись в localStorage
     */
    addToCart(good) {
      if (this.$store.state.selectedColor === null) {
        this.open2();
      } else {
        this.$store.state.itemsInCart.push(good);
        this.$store.state.sumPrice += Number(good.price);
        localStorage.setItem("sumPrice", Number(this.$store.state.sumPrice));
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