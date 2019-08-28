<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="form-content">
        <input
          type="text"
          v-model="product.title"
          id="title"
          name="title"
          placeholder="Tttle"
          required
        />
        <input
          type="number"
          v-model="product.price"
          id="price"
          name="price"
          placeholder="Price"
          required
        />
        <select v-model="product.currency" class="custom-select mr-sm-2" required>
          <option disabled hidden value>Choose currency</option>
          <option v-for="item in items" :value="item.val" :key="item.id">{{item.val}}</option>
        </select>
        <input
          type="text"
          v-model="product.description"
          name="description"
          placeholder="Description"
        />
        <input
          type="url"
          v-model="product.image_url"
          name="image_url"
          placeholder="Image Url Address"
          required
        />
      </div>
      <div>
        <form>
          <div class="form-check-inline">
            <input
              id="radio1"
              type="radio"
              value="accessory"
              class="radio"
              name="type"
              v-model="product.type"
              required
            />
            <label for="radio1" class="form-check-label">ACCESSORY</label>
          </div>
          <div class="form-check-inline">
            <input
              id="radio2"
              type="radio"
              value="necklace"
              class="radio"
              name="type"
              v-model="product.type"
            />
            <label for="radio2" class="form-check-label">NECKLACE</label>
          </div>
          <div class="form-check-inline">
            <input
              id="radio3"
              type="radio"
              value="bracelet"
              class="radio"
              name="type"
              v-model="product.type"
            />
            <label for="radio3" class="form-check-label">BRACELET</label>
          </div>
          <div class="form-check-inline">
            <input
              id="radio4"
              type="radio"
              value="earring"
              class="radio"
              name="type"
              v-model="product.type"
            />
            <label for="radio4" class="form-check-label">EARRING</label>
          </div>
        </form>
      </div>
      <button
        type="submit"
        class="btn btn-outline-dark"
      >{{ editing ? 'Save Product' : 'Add Product'}}</button>
    </form>
  </div>
</template>

<script>
import shopService from "./../../services/shop-service";

export default {
  name: "AddNewProduct",
  data() {
    return {
      product: {
        currency: ""
      },
      errors: {},
      items: [{ id: 1, val: "RSD" }, { id: 2, val: "€" }, { id: 3, val: "$" }],
      productId: null,
      editing: false
    };
  },
  methods: {
    onSubmit() {
      if (this.editing) {
        this.productEdit();
      } else {
        this.addNewProduct();
      }
    },
    addNewProduct() {
      shopService
        .addProduct(this.product)
        .then(() => {
          this.$router.push({ path: "/shop" });
        })
        .catch(error => {
          this.errors = error.response;
        });
    },
    productEdit() {
      const user = JSON.parse(localStorage.getItem("user"));

      if (user.id === 1) {
        shopService
          .editProduct(this.productId, this.product)
          .then(() => {
            this.$router.push({
              name: "single-product",
              params: { id: this.productId }
            });
          })
          .catch(error => {
            this.errors = error;
          });
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.id) {
        vm.productId = Number(to.params.id);
        vm.editing = true;
        shopService.getSingleProduct(vm.productId).then(shop => {
          vm.product = shop;
        });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import "./../../scss/_add-product";
</style>
