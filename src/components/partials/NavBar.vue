<template>
  <div>
    <div class="nav-div">
      <nav>
        <a href="/home">
          <!-- <img class="logo" src="../../assets/images/D.png" alt> -->
          <span class="navbar-text-left">Diva Design by Ivana</span>
        </a>
        <!-- <div class="username-div">
          <span id="user-name" v-if="user">Hello, {{user.first_name}} {{user.last_name}}</span>
        </div>-->
        <ul>
          <li>
            <router-link class="nav-item" to="/home">Home</router-link>
          </li>
          <li>
            <router-link class="nav-item" to="/shop">Shop</router-link>
          </li>
          <li>
            <router-link class="nav-item" to="/about">About Us</router-link>
          </li>

          <li id="logout" v-if="user" class="nav-item" @click="logoutOnSubmit">Logout</li>
        </ul>
      </nav>
    </div>
  </div>
  <!-- <hr> -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  },
  methods: {
    ...mapActions(["logout"]),
    logoutOnSubmit() {
      this.logout();
    }
  }
};

$(window).on("scroll", function() {
  if ($(window).scrollTop() > 100) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});
</script>

<style  lang="scss" scoped>
@import "./../../scss/navbar";
</style>
