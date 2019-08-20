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
            <strong>Type:</strong>
          </span>
          <br />
          <ul>
            <li>
              <label for="all">All:</label>
              <input id="all" type="checkbox" v-model="allTypes" value="all" />
            </li>
            <li>
              <label for="accessory">Accessories:</label>
              <input id="accessory" type="radio" v-model="type" value="accessory" />
            </li>
            <li>
              <label for="necklace">Necklaces:</label>
              <input id="necklace" type="radio" v-model="type" value="necklace" />
            </li>
            <li>
              <label for="bracelet">Bracelets:</label>
              <input id="bracelet" type="radio" v-model="type" value="bracelet" />
            </li>
            <li>
              <label for="earring">Earrings:</label>
              <input id="earring" type="radio" v-model="type" value="earring" />
            </li>
          </ul>
        </div>
      </div>
      <div class="row-div">
        <div class="product-div" v-for="shop in computedProducts" :key="shop.id">
          <div class="product-image-div">
            <img class="product-image" :src="shop.image_url" alt />
          </div>
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
      <router-link to="add-new-product" v-if="user && user.id === 1">
        <button>Add New Product</button>
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
    shopService.getShop().then(blogs => {
      next(vm => {
        vm.shops = blogs.shop.data;
        vm.last_page = blogs.last_page;
      });
    });
  }
};
</script>

<style lang="scss" scoped>
@import "./../scss/_shop";
</style>
