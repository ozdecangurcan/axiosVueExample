import Vue from "vue";
import VueRouter from "vue-router";
import AxiosGet from "@/views/axios-get.vue";
import AxiosPost from "@/views/axios-post.vue";


Vue.use(VueRouter);

const routes = [
    { path: "/axios-get", component: AxiosGet },
    { path: "/axios-post", component: AxiosPost },
    { path: "*", redirect: "/axios-get" }
];

const router = new VueRouter({
    routes
});

export default router;