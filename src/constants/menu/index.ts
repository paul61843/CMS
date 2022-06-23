import type { Menu } from "@/types/menu";

const homeMenu: Menu = {
  title: "首頁",
  link: "/",
};

const formMenu: Menu = {
  title: "表單",
  subMenu: [
    {
      title: "Option 1",
    },
    {
      title: "Option 2",
    },
  ],
};

const tableMenu: Menu = {
  title: "表格",
  subMenu: [
    {
      title: "Option 1",
    },
    {
      title: "Option 2",
    },
  ],
};

const postMenu: Menu = {
  title: "文章管理",
  subMenu: [
    {
      title: "發表文章",
      link: "/article/post",
    },
    {
      title: "修改文章",
      link: "/article/edit",
    },
    {
      title: "文章列表",
      link: "/article/list",
    },
  ],
};

export default [homeMenu, postMenu, formMenu, tableMenu];
