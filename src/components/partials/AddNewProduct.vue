<template>
  <div>
    <form @submit.prevent="addNewProduct">
      <div class="form-content">
        <input type="text" v-model="newProduct.title" id="title" name="title" placeholder="Tttle" />
        <input type="number" v-model="newProduct.price" id="price" name="price" placeholder="Price" />
        <input
          type="text"
          v-model="newProduct.description"
          name="description"
          placeholder="Description"
        />
        <input
          type="url"
          v-model="newProduct.image_url"
          name="image_url"
          placeholder="Image Url Address"
        />
      </div>
      <div>
        <div class="form-check-inline">
          <input type="radio" value="accessory" v-model="newProduct.type" />
          <label class="form-check-label">ACCESSORY</label>
        </div>
        <div class="form-check-inline">
          <input type="radio" value="necklace" v-model="newProduct.type" />
          <label class="form-check-label">NECKLACE</label>
        </div>
        <div class="form-check-inline">
          <input type="radio" value="bracelet" v-model="newProduct.type" />
          <label class="form-check-label">BRACELET</label>
        </div>
        <div class="form-check-inline">
          <input type="radio" value="earring" v-model="newProduct.type" />
          <label class="form-check-label">EARRING</label>
        </div>
      </div>
      <button type="submit" class="btn btn-outline-dark">Add product</button>
    </form>
  </div>
</template>

<script>
import shopService from "./../../services/shop-service";
export default {
  data() {
    return {
      newProduct: {},
      errors: []
    };
  },
  methods: {
    addNewProduct() {
      shopService
        .addProduct(this.newProduct)
        .then(() => {
          this.$router.push({ path: "/shop" });
          // this.$router.go(0);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>

<style scoped>
.form-content input {
  margin-bottom: 9px;
  border-radius: 10px;
  border: 2px solid black;
  width: 100%;
  padding: 5px;
}
#title {
  margin-right: 1%;
  width: 49%;
}
#price {
  margin-left: 1%;
  width: 49%;
}
::-webkit-input-placeholder {
  text-align: center;
}

:-moz-placeholder {
  /* Firefox 18- */
  text-align: center;
}

::-moz-placeholder {
  /* Firefox 19+ */
  text-align: center;
}

:-ms-input-placeholder {
  text-align: center;
}
</style>
