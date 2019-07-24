<template>
  <div>
    <form @submit.prevent="addBlog">
      <div>
        <input v-model="newBlog.title" name="title" type="text" placeholder="Enter Title">

        <input
          v-model="newBlog.image_url"
          name="image_url"
          type="text"
          placeholder="Your Blog image"
        >
        <!-- <vue-editor v-model="newBlog.content" class="textarea"></vue-editor> -->
        <textarea v-model="newBlog.content" class="textarea"/>
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
      <button type="submit" class="btn btn-outline-dark">Post Blog</button>
    </form>
    <hr>
  </div>
</template>
<script>
import blogsService from "./../../services/blogs-service";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import VueCkeditor from "vue-ckeditor2";
export default {
  data() {
    return {
      newBlog: {},
      errors: {}
    };
  },
  components: {},
  methods: {
    addBlog() {
      blogsService
        .createBlog(this.newBlog)
        .then(() => {
          this.$router.push({ name: "home" });
        })
        .catch(error => {
          console.log((this.errors = error));
        });
    }
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
