<template>
  <div id="axios-post">
    <div class="container">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <form @submit="sendNewPost">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="Title"
                v-model="newPost.title"
              />
            </div>
            <div class="form-group">
              <label for="Body">Body</label>
              <input
                type="text"
                class="form-control"
                id="body"
                placeholder="Body"
                v-model="newPost.body"
              />
            </div>
            <button type="submit" class="btn btn-primary">Kaydet</button>
          </form>
        </div>
        <div class="col-3"></div>
      </div>
    </div>

    <div v-if="showResult">
      Oluşan Post
      <pre>{{ sendNewPostResult }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showResult: false,
      errors: [],
      newPost: {
        title: "",
        body: "",
      },
      sendNewPostResult: {
        id: "",
        title: "",
        body: "",
      },
    };
  },
  methods: {
    sendNewPost() {
      this.$axios
        .post("/posts", this.newPost)
        .then((response) => (this.sendNewPostResult = response.data))
        .then((this.showResult = true))
        .catch((error) => {
          this.errors.push(error);
        })
        .finally(this.clear());
    },

    clear() {
      this.newPost.title = "";
      this.newPost.body = "";
    },
  },
};
</script>