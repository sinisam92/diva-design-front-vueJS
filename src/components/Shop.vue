<template>
  <div>
    <div class="container">
      <ShopNavBar/>
      <div class="new-additions-title">
        <h1 class="title">OUR NEWEST ADDITIONS</h1>
      </div>
      <div class="row-div">
        <div class="product-div" v-for="shop in shops" :key="shop.id">
          <img class="product-image" :src="shop.image_url" alt>
          <div class="product-title">
            <h3>{{shop.title}}</h3>
          </div>
          <div class="product-price">
            <h4>{{shop.price}} RSD</h4>
          </div>
          <div class="product-description">
            <p>{{shop.description}}</p>
          </div>
        </div>
      </div>
      <AddNewProduct v-if="user"/>
      <hr>
    </div>
  </div>
</template>

<script>
import ShopNavBar from "./../components/partials/ShopNavBar";
import AddNewProduct from "./../components/partials/AddNewProduct";
import shopService from "./../services/shop-service";
import { mapGetters } from "vuex";
export default {
  components: {
    ShopNavBar,
    AddNewProduct
  },
  data() {
    return {
      newProduct: {},
      shops: {}
    };
  },
  // created() {
  //   shopService
  //     .getShop()
  //     .then(response => {
  //       this.shops = response.shop.data;
  //     })
  //     .catch(error => {
  //       this.errors = error.response.data.errors;
  //     });
  // },
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  },
  beforeRouteEnter(to, from, next) {
    shopService.getShop().then(blogs => {
      next(vm => {
        vm.shops = blogs.shop.data;
        vm.last_page = blogs.last_page;
        console.log(vm.shops);
      });
    });
  }
};
</script>

<style lang="scss" scoped>
@import "./../scss/_shop";
</style>
