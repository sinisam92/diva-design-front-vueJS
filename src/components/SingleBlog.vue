<template>
  <div class="single-page">
    <div class="content-container">
      <div class="post-image">
        <img :src="blog.image_url" alt="Sorry! ;(" />
      </div>
      <!-- <div class="authot-profile-image">
					<img src="" alt="">
      </div>-->
      <div class="post-content">
        <!-- <h4><a href="#">{{ userFullName }}</a></h4> -->
        <h2>{{ blog.title }}</h2>
        <span>{{ blog.created_at | formatDate }}</span>
        <div class="content-div">
          <p>{{ blog.content }}</p>
        </div>
        <div v-if="user && user.id === 1">
          <button class="btn btn-outline-primary">Edit</button>
          <button class="btn btn-outline-danger" @click="deleteBlog">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blogsService from "./../services/blogs-service";
import { DateMixin } from "./../utils/mixins";
import { mapGetters } from "vuex";
export default {
  mixins: [DateMixin],
  data() {
    return {
      blog: {},
      blogId: null,
      userFullName: null
    };
  },
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  },
  methods: {
    deleteBlog() {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user.id === 1) {
        if (confirm(`Are you sure ${this.blog.title}?`)) {
          blogsService.deleteSingleBlog(this.$route.params.id).then(() => {
            this.$router.push({ path: "/home" });
          });
        }
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    blogsService.getSingleBlog(Number(to.params.id)).then(blog => {
      next(vm => {
        vm.blog = blog;
        vm.blogId = blog.id;
        vm.userFullName = blog.user.first_name + " " + blog.user.last_name;
      });
    });
  }
};
</script>

<style scoped>
.post-image img {
  width: 800px;
  height: 450px;
}
.single-page {
  margin-top: 100px;
}
.post-content p {
  text-align: center;
}
.content-div {
  max-width: 600px;
  display: inline;
  vertical-align: center;
  line-height: 1.8em;
}
</style>
