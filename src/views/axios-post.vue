<template>
  <div id="axios-post">
    <div class="container">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <form @submit.prevent="sendNewPost">
            <div class="form-group">
              <label for="Id">Id</label>
              <input
                type="text"
                class="form-control"
                id="Id"
                placeholder="Id"
                v-model="newPost.id"
              />
              <p>{{newPost.id}}</p>

            </div>
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
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="inProgress"
            >
              Kaydet
            </button>
          </form>
        </div>
        <div class="col-3"></div>
      </div>
    </div>

    <div v-if="sendNewPostResult">
      Oluşan Post
      <pre>{{ sendNewPostResult }}</pre>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      inProgress: false,
      errors: [],
      newPost: {
        id: "",
        title: "",
        body: "",
      },
      sendNewPostResult: null,
    };
  },
  methods: {
    sendNewPost() {
      this.inProgress = true;
      this.$axios
        .post("/posts", this.newPost)
        .then((response) => (this.sendNewPostResult = response.data))
        .catch((error) => {
          this.errors.push(error);
        })
        .finally(() => (this.inProgress = false));
    },
  },
};
</script>