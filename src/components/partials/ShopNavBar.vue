<template>
  <div>
    <nav class="shop-menu">
      <ul>
        <li>
          <!-- <router-link class="link-item" to="/shop/accessories">accessories</!-->
          <input id="accessories" type="checkbox" v-model="type" value="accessories" />
          <label for="accessories">Accessories</label>
        </li>
        <li>
          <!-- <router-link class="link-item" v-model="email" to="/shop/necklaces">necklaces</router-link> -->
          <input id="necklaces" type="checkbox" v-model="type" value="necklaces" />
          <label for="necklaces">Necklaces</label>
        </li>
        <li>
          <!-- <router-link class="link-item" to="/shop/bracelets">bracelets</router-link> -->
          <input id="bracelets" type="checkbox" v-model="type" value="bracelets" />
          <label for="bracelets">Bracelets</label>
        </li>
        <li>
          <!-- <router-link class="link-item" to="/shop/earrings">earrings</router-link> -->
          <input id="earrings" type="checkbox" v-model="type" value="earrings" />
          <label for="earrings">Earrings</label>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  prop: ["value"],
  data() {
    return {
      type: []
    };
  },
  methods: {
    handleInput() {
      this.$emit("input", this.type);
    }
  }
};
</script>

<style lang="scss" scoped>
.shop-menu {
  border-bottom: 1px solid gray;
  ul {
    li {
      display: inline-block;
      padding: 16px 32px;
      font-size: 25px;
      text-transform: uppercase;
      font-family: "Oranienbaum", serif;
      letter-spacing: 4px;
    }
  }
}
.link-item {
  text-decoration: none;
  color: black;
}
.link-item:hover {
  color: #e4c7d9;
}
.link-item.router-link-active {
  color: #e4c7d9;
}
</style>
