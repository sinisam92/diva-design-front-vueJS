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
input {
  text-align: center;
}
input[type="radio"] {
  display: none;
}
input[type="radio"] + label::before {
  content: "";
  display: inline-block;
  border: 1px solid;
  border-radius: 50%;
  margin: 0 0.5em;
  &:hover {
    color: grey;
  }
}
input[type="radio"]:checked + label::before {
  background-color: darkmagenta;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s;
  color: darkmagenta;
}
.radio + label::before {
  width: 1em;
  height: 1em;
  &:hover {
    color: darkmagenta;
  }
}
label {
  &:hover {
    color: grey;
  }
}
input[type="radio"]:checked + label {
  color: darkmagenta;
}
</style>