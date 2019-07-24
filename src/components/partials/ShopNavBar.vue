<template>
  <div>
    <nav class="shop-menu">
      <ul>
        <li>
          <router-link class="link-item" to="/shop/accessories">accessories</router-link>
        </li>
        <li>
          <router-link class="link-item" to="/shop/necklaces">necklaces</router-link>
        </li>
        <li>
          <router-link class="link-item" to="/shop/bracelets">bracelets</router-link>
        </li>
        <li>
          <router-link class="link-item" to="/shop/earrings">earrings</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
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
