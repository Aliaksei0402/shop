<template>
  <div class="color">
    <div class="colors-phones">
      <div v-for="color in colors" :key="color.color" class="colors-phone">
        <img
          :src="color.colorUrl"
          :title="color.color"
          height="100px"
          class="phone-hover"
          @click="selectColor(color)"
          v-bind:class="[color ===  selectedColor ?  'activeColor' : '']"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Colors",

  /**
   * @param {Object} selectedColor выбранный цвет товара (color, colorUrl)
   */
  data() {
    return {
      selectedColor: {},
    }
  },

  /**
  * @param {Array} colors массив всевозможных цветов товара
  */
  props: {
    colors: Array,
  },


  methods: {
    /**
    * @description запись в data выбранного цета
    * @param {Object} color объект цвета (color, colorUrl)
    */
    selectColor(color) {
      this.selectedColor = color;
      this.$store.dispatch('selectColor', color);
    }
  }
}
</script>