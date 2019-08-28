<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <input v-model="blog.title" name="title" type="text" placeholder="Enter Title" />

        <input v-model="blog.image_url" name="image_url" type="text" placeholder="Your Blog image" />
        <!-- <vue-editor v-model="blog.content" class="textarea"></vue-editor> -->
        <textarea v-model="blog.content" class="textarea" />
        <!-- <ckeditor
          :editor="editor"
          v-model="newBlog.content"
          id="blog-textarea"
          :config="editorConfig"
        ></ckeditor>-->
        <!-- <vue-ckeditor
          v-model="newBlog.content"
          :config="editorConfig"
          @blur="onBlur($event)"
          @focus="onFocus($event)"
          @contentDom="onContentDom($event)"
          @dialogDefinition="onDialogDefinition($event)"
          @fileUploadRequest="onFileUploadRequest($event)"
          @fileUploadResponse="onFileUploadResponse($event)"
        />-->
      </div>
      <button type="submit" class="btn btn-outline-dark">{{ editing ? "Save Blog" : "Create Blog" }}</button>
    </form>
    <hr />
  </div>
</template>
<script>
import blogsService from "./../../services/blogs-service";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import VueCkeditor from "vue-ckeditor2";
export default {
  data() {
    return {
      blog: {},
      errors: {},
      editing: false,
      blogId: null
    };
  },
  components: {},
  methods: {
    onSubmit() {
      if (this.editing) {
        this.blogEdit();
      } else {
        this.addBlog();
      }
    },
    addBlog() {
      blogsService
        .createBlog(this.blog)
        .then(() => {
          this.$router.push({ name: "home" });
        })
        .catch(error => {
          console.log((this.errors = error));
        });
    },
    blogEdit() {
      const user = JSON.parse(localStorage.getItem("user"));

      if (user.id === 1) {
        console.log(this.blog);
        blogsService
          .editBlog(this.blogId, this.blog)
          .then(() => {
            this.$router.push({
              name: "single-blog",
              params: { id: this.blogId }
            });
          })
          .catch(error => {
            this.errors = error.response.data.message;
          });
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.id) {
        vm.blogId = Number(to.params.id);
        vm.editing = true;
        blogsService.getSingleBlog(vm.blogId).then(blog => {
          vm.blog = blog;
          vm.userFullName = blog.user.first_name + " " + blog.user.last_name;
        });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.textarea {
  width: 100%;
}
input {
  margin-bottom: 9px;
  border-radius: 10px;
  width: 100%;
  padding: 5px;
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
