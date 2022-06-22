export type Menu = {
  title: string;
  subMenu?: SubMenu;
  link?: string;
};

export type SubMenu = Array<{
  title: string;
  link?: string;
}>;
