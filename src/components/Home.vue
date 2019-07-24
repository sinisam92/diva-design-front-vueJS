<template>
  <div>
    <div>
      <b-carousel
        id="carousel-fade"
        v-model="slide"
        :interval="4000"
        fade
        indicators
        background="#ababab"
        width="1024"
        height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="http://donniesbeef.com/wp-content/uploads/2018/12/locking-bracelet-1-1024x480.jpg"
            alt="sorry"
          />
        </b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://farm2.static.flickr.com/1449/23598407993_1fc9dc1f2b_b.jpg"
            alt="sorry"
          />
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://cdn.shopify.com/s/files/1/0279/7627/files/SldShw_ReticPodNck_14Kdot_1024x.jpg?v=1550272372"
            alt="sorry"
          />
        </b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://www.julieclarke.com.au/wp-content/uploads/2019/04/19944195_328149600948835_3034832705601614411_o-1024x480.jpg"
            alt="image slot"
          />
        </b-carousel-slide>
      </b-carousel>
    </div>

    <div class="row">
      <div class="blog-post column" v-for="blog in blogs" :key="blog.id">
        <div>
          <img :src="blog.image_url" alt="Sorry! :(" />
        </div>
        <div class="post-container">
          <div class="blog-post-date">
            <span>{{ blog.created_at | formatDate }}</span>
          </div>
          <div class="blog-post-title">{{ blog.title }}</div>
          <div class="blog-post-content">{{ blog.content }}</div>
          <div class="read-more">
            <router-link :to="{ name: 'single-blog', params: { id: blog.id }}">Read more &#10093;</router-link>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <router-link to="/create-blog">
      <button class="btn btn-outline-dark" v-if="user.id === 1">Create New Blog</button>
    </router-link>
  </div>
</template>

<script>
import blogsService from "./../services/blogs-service";
import { DateMixin } from "./../utils/mixins";
import CreateBlog from "./partials/CreateBlog";
import { mapGetters } from "vuex";
export default {
  components: {
    CreateBlog
  },
  name: "Home",
  mixins: [DateMixin],
  data() {
    return {
      blogs: {},
      last_page: null,
      slide: 0,
      sliding: null,
      errors: {}
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  },
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  },
  beforeRouteEnter(to, from, next) {
    blogsService.getBlogs().then(blogs => {
      next(vm => {
        vm.blogs = blogs.blogs.data;
        vm.last_page = blogs.last_page;
        console.log(vm.blogs);
      });
    });
  }
};
</script>

<style lang="scss" scoped>
@import "./../scss/homepage";
</style>
