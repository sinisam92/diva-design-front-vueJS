<template>
  <div>
    <div class="container">
      <!-- <ShopNavBar /> -->
      <div class="new-additions-title">
        <h1 class="title">OUR NEWEST ADDITIONS</h1>
      </div>
      <div class="filter">
        <div class="search">
          <input type="text" v-model="keyword" placeholder="Search" />
        </div>
        <div class="type">
          <span>
            <strong>Choose category:</strong>
          </span>
          <br />
          <ul>
            <li>
              <input id="all" type="checkbox" class="checkbox" v-model="allTypes" value="all" />
              <label for="all">All:</label>
            </li>
            <li>
              <input id="accessory" type="radio" class="radio" v-model="type" value="accessory" />
              <label for="accessory">Accessories:</label>
            </li>
            <li>
              <input id="necklace" type="radio" class="radio" v-model="type" value="necklace" />
              <label for="necklace">Necklaces:</label>
            </li>
            <li>
              <input id="bracelet" type="radio" class="radio" v-model="type" value="bracelet" />
              <label for="bracelet">Bracelets:</label>
            </li>
            <li>
              <input id="earring" type="radio" class="radio" v-model="type" value="earring" />
              <label for="earring">Earrings:</label>
            </li>
          </ul>
        </div>
      </div>
      <div class="row-div">
        <div class="product-div" v-for="shop in computedProducts" :key="shop.id">
          <router-link :to="{ name: 'single-product', params: { id: shop.id }}">
            <div class="product-image-div">
              <img class="product-image" :src="shop.image_url" alt />
            </div>
            <div class="product-title">
              <h3>{{shop.title}}</h3>
            </div>
            <div class="product-price">
              <h4>{{shop.price}} {{shop.currency}}</h4>
            </div>
            <!-- <div class="product-description">
              <p>{{shop.description}}</p>
            </div>-->
          </router-link>
        </div>
      </div>
      <router-link to="add-new-product" v-if="user && user.id === 1">
        <button class="btn btn-outline-dark">Add New Product</button>
      </router-link>
      <hr />
    </div>
  </div>
</template>

<script>
import shopService from "./../services/shop-service";
import { mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      newProduct: {},
      shops: [],
      keyword: "",
      type: [],
      sortBy: "name",
      allTypes: []
    };
  },

  computed: {
    ...mapGetters({
      user: "getUser"
    }),
    computedProducts() {
      if (this.allTypes.includes("all")) {
        return this.shops;
      } else {
        return this.shops.filter(item => {
          return (
            (this.keyword.length === 0 ||
              item.title.toLowerCase().includes(this.keyword.toLowerCase())) &&
            (this.type.length === 0 || item.type.includes(this.type))
          );
        });
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    shopService.getShop().then(shops => {
      next(vm => {
        vm.shops = shops.shop.data;
        vm.last_page = shops.last_page;
      });
    });
  }
};
</script>

<style lang="scss" scoped>
@import "./../scss/_shop";
</style>
