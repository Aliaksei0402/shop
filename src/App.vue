<template>
  <div id="app">
    <!-- <button @click="clear">clear</button> -->
    <Header />
    <MainSection />
  </div>
</template>

<script>
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

export default {

  name: 'App',

  components: {
    Header,
    MainSection
  },

  // methods: {
  //   clear() {
  //     localStorage.clear();
  //   }
  // }
}
</script>