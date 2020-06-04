<template>
  <div class="sorting">
    <div @click="$emit('sort')">
      <img src="../../img/sort.png" />
    </div>
    <Look />
  </div>
</template>

<script>
import Look from "./Look";

export default {
  name: "Sorting",

  components: {
    Look
  }
}
</script>