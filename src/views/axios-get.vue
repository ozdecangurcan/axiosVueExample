<template>
  <div id="axios-get">
    <ul v-if="errors && errors.length">
      <li v-for="(error, index) of errors" :key="index">
        {{ index + 1 }} - {{ error.message }}
      </li>
    </ul>

    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody v-for="post of posts" :key="post.id">
          <tr>
            <th scope="row">{{ post.id }}</th>
            <td>{{ post.title }}</td>
            <td>{{ post.body }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getPosts();
  },
  data() {
    return {
      posts: [],
      errors: [],
    };
  },
  methods: {

    getPosts() {
      this.$axios
        .get("/posts")
        .then((response) => (this.posts = response.data))
        .catch((error) => {
          this.errors.push(error);
        });
    },
  },
};
</script>