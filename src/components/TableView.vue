<template>
  <div class="table-view" @click="$emit('dVisible', good)">
    <div class="card phone-hover">
      <img :src="good.image" class="card-img-top img-thumbnail title-img-table" alt="good" />
      <div class="card-body">
        <h5 class="card-title">{{good.name}}</h5>
      </div>
      <div class="card-footer">
        <small class="text-muted">$ {{good.price}}</small>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  name: "TableView",

  props: {
    good: Object,
  },

}
</script>