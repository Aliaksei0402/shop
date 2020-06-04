<template>
  <div class="row searching">
    <div class="search-name">
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder="Название товара"
        v-model="name"
      />
    </div>
    <div class="search-price">
      <div class="col-auto">
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">$</div>
          </div>
          <input
            type="number"
            class="form-control"
            id="price-from"
            placeholder="От"
            v-model="minPrice"
          />
          <input
            type="number"
            class="form-control"
            id="price-to"
            placeholder="До"
            v-model="maxPrice"
          />
        </div>
      </div>
    </div>
    <button class="search-btn" @click="$emit('find', [name, minPrice, maxPrice])">
      <span>Найти</span>
      <img src="../../img/glass.png" />
    </button>
  </div>
</template>

<script>

export default {
  name: "Searching",

  /**
   * @param {String} name имя товара, нечувствительно к регистру
   * @param {Number} maxPrice максимальная цена товара
   * @param {Number} minPrice минимальная цена товара
   */
  data() {
    return {
      name: null,
      minPrice: null,
      maxPrice: null,
    }
  },
}
</script>