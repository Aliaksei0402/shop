<template>
  <div class="look">
    <img src="../../img/artboard.png" @click="$store.dispatch('table')" />
    <img src="../../img/list.png" @click="$store.dispatch('list')" />
  </div>
</template>

<script>
export default {
  name: "Look",
}
</script>