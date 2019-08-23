<template>
  <div>
    <div class="flex">
      <div class="product-image-div">
        <img class="product-image" :src="product.image_url" alt />
      </div>
      <div class="product-info">
        <div class="product-title">
          <h3>{{product.title}}</h3>
        </div>
        <div class="product-description">
          <p>{{product.description}}</p>
        </div>
        <div class="product-price">
          <h5>{{product.price}} {{product.currency}}</h5>
        </div>
      </div>
    </div>
    <div class="edit-delete-buttons" v-if="user && user.id === 1">
      <button class="btn btn-outline-primary">Edit</button>
      <button class="btn btn-outline-danger" @click="deleteProduct">Delete</button>
    </div>
  </div>
</template>
<script>
import shopService from "./../services/shop-service";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      product: {}
    };
  },
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  },
  methods: {
    deleteProduct() {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user.id === 1) {
        if (confirm(`Are you sure ${this.product.title}?`)) {
          shopService.deleteSingleProduct(this.$route.params.id).then(() => {
            this.$router.push({ path: "/shop" });
          });
        }
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    shopService.getSingleProduct(Number(to.params.id)).then(shop => {
      next(vm => {
        vm.product = shop;
      });
    });
  }
};
</script>
<style lang="scss" scoped>
@import "./../scss/_single-product";
</style>