import Index from "@/views/article/index.vue";
import Post from "@/views/article/post.vue";
import type { RouteRecordRaw } from "vue-router";

const route: RouteRecordRaw[] = [
  {
    path: "/article",
    component: Index,
    children: [
      {
        path: "post",
        component: Post,
      },
    ],
  },
];

export default route;
