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
  </div>
</template>
<script>
import shopService from "./../services/shop-service";
export default {
  data() {
    return {
      product: {}
    };
  },
  beforeRouteEnter(to, from, next) {
    shopService.getSingleProduct(Number(to.params.id)).then(shop => {
      next(vm => {
        vm.product = shop;
      });
      console.log(shop);
    });
  }
};
</script>
<style lang="scss" scoped>
@import "./../scss/_single-product";
</style>