export type Menu = {
  title: string;
  subMenu?: SubMenu;
};

export type SubMenu = Array<{
  title: string;
}>;
