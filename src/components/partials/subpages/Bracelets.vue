<template>
  <div class="page-wrapper">
    <CategoryShopCarusel/>
    <ShopNavBar/>
    <div class="category-title">
      <h1 class="title">Bracelets</h1>
    </div>
    <div class="row-div">
      <div class="product-div" v-for="shop in filteredProducts" :key="shop.id">
        <div class="product-content">
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
    </div>
  </div>
</template>

<script>
import ShopNavBar from "../../partials/ShopNavBar";
import shopService from "./../../../services/shop-service";
import CategoryShopCarusel from "../CategoryShopCarusel";
export default {
  components: {
    ShopNavBar,
    CategoryShopCarusel
  },
  data() {
    return {
      shops: [],
      type: "bracelet"
    };
  },
  created() {
    shopService
      .getShop()
      .then(response => {
        this.shops = response.shop.data;
      })
      .catch(error => {
        this.errors = error.response.data.message;
      });
  },
  computed: {
    filteredProducts() {
      return this.shops.filter(shop =>
        shop.type.toLowerCase().includes(this.type)
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../../../scss/_product-category";
</style>