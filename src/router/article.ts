import Index from "@/views/article/index.vue";
import Post from "@/views/article/post.vue";
import Edit from "@/views/article/edit.vue";
import List from "@/views/article/list.vue";
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
      {
        path: "edit",
        component: Edit,
      },
      {
        path: "list",
        component: List,
      },
    ],
  },
];

export default route;
