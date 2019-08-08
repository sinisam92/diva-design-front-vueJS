<template>
  <div id="app">
    <nav-bar></nav-bar>
    <Header v-if="['home'].includes($route.name)" />
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/partials/NavBar";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
export default {
  name: "app",
  components: {
    NavBar,
    Header,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  /* background-color: #FCD6E1; */
  /* background: url("https://i.pinimg.com/originals/e2/71/fd/e271fda72f1e158b5f0569cc72d36d7f.jpg") no-repeat center fixed; */
  /* margin-top: 60px; */
}
input:focus {
  outline-width: 0;
}
textarea:focus {
  outline-width: 0;
}
.container {
  margin-top: 100px;
  max-width: 1440px;
}
</style>
