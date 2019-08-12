<template>
  <div class="search">
    <p>
      <strong>Keyword:</strong>
      <input type="text" v-model="keyword" />
    </p>
    <p>
      <strong>Color:</strong>
      Red:
      <input type="checkbox" v-model="colors" value="red" />
      Black:
      <input type="checkbox" v-model="colors" value="black" />
    </p>
    <p>
      <strong>Size:</strong>
      L:
      <input type="checkbox" v-model="sizes" value="L" />
      XL:
      <input type="checkbox" v-model="sizes" value="XL" />
    </p>
    <p>
      <strong>Sort By:</strong>
      <select v-model="sortBy">
        <option value="name">Product Name</option>
        <option value="color">Color</option>
        <option value="size">Size</option>
      </select>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      colors: [],
      sizes: [],
      sortBy: "name"
    };
  }
};
</script>

<style lang="scss" scoped>
.search {
  background-color: bisque;
  position: fixed;
  left: 0;
  top: 30%;
}
</style>