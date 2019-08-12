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
              <label for="accessory">Accessories:</label>
              <input name="accessory" type="checkbox" v-model="type" value="accessory" />
            </li>
            <li>
              <label for="necklace">Necklaces:</label>
              <input name="necklace" type="checkbox" v-model="type" value="necklace" />
            </li>
            <li>
              <label for="bracelet">Bracelets:</label>
              <input name="bracelet" type="checkbox" v-model="type" value="bracelet" />
            </li>
            <li>
              <label for="earring">Earrings:</label>
              <input name="earring" type="checkbox" v-model="type" value="earring" />
            </li>
          </ul>
        </div>

        <strong>Sort By:</strong>
        <select v-model="sortBy">
          <option value="name">Product Name</option>
          <option value="color">Color</option>
          <option value="size">Size</option>
        </select>
      </div>
      {{shops}}
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
      <AddNewProduct v-if="user && user.id === 1" />
      <hr />
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
      shops: [],
      keyword: "",
      type: [],
      sortBy: "name",
      colors: [],
      sizes: []
    };
  },

  computed: {
    ...mapGetters({
      user: "getUser"
    }),
    computedProducts() {
      return this.shops
        .filter(item => {
          console.log(item);

          return (
            (this.keyword.length === 0 || item.title.includes(this.keyword)) &&
            (this.colors.length === 0 || this.colors.includes(item.color)) &&
            (this.sizes.length === 0 || this.sizes.includes(item.size)) &&
            (this.type.length === 0 || item.type.includes(item.type))
          );
        })
        .sort((a, b) => {
          return a[this.sortBy]
            .toLowerCase()
            .localeCompare(b[this.sortBy].toLowerCase());
        });
    }
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
