<template>
  <nav class="navbar header">
    <div class="menu">
      <div class="logo">
        <a href="#">
          <img src="../../img/papshop.png" />
        </a>
      </div>

      <Cart />
    </div>
  </nav>
</template>

<script>
import Cart from "./Cart";

export default {
  name: "Header",
  
  components: {
    Cart
  }
}
</script>