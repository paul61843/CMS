<template>
  <a-layout class="h-screen">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <Logo :show-text="!collapsed" />

      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-sub-menu :key="idx" v-for="(menuItem, idx) in menu">
          <template #icon>
            <user-outlined />
          </template>
          <template #title>{{ menuItem.title }}</template>
          <a-menu-item
            :key="subIdx"
            v-for="(subItem, subIdx) in menuItem.subMenu"
            >{{ subItem.title }}</a-menu-item
          >
        </a-sub-menu>
        <!-- <video-camera-outlined />
        <upload-outlined /> -->
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="px-4" style="background: #fff">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import Logo from "@/components/navigation/Logo.vue";
import menuSetting from "@/constants/menu.js";

import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  components: {
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    Logo,
  },
  setup() {
    return {
      selectedKeys: ref<string[]>(["1"]),
      collapsed: ref<boolean>(false),
      menu: reactive(menuSetting),
    };
  },
});
</script>
<style lang="scss" scoped></style>
