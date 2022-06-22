<template>
  <a-layout class="h-screen">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <Logo :show-text="!collapsed" />

      <a-menu
        v-model:selectedKeys="selectedKeys"
        v-model:openKeys="openKeys"
        theme="dark"
        mode="inline"
      >
        <template v-for="(menuItem, idx) in menu" :key="menuItem.title + idx">
          <a-menu-item
            v-if="!menuItem.subMenu"
            :key="menuItem.title + idx"
            @click="toPage(menuItem.link)"
          >
            <template #icon>
              <PieChartOutlined />
            </template>
            {{ menuItem.title }}
          </a-menu-item>
          <a-sub-menu :key="idx" v-else>
            <template #icon>
              <user-outlined />
            </template>
            <template #title>{{ menuItem.title }}</template>
            <a-menu-item
              v-for="(subItem, subIdx) in menuItem.subMenu"
              :key="menuItem.title + subIdx"
              @click="toPage(subItem.link)"
              >{{ subItem.title }}</a-menu-item
            >
          </a-sub-menu>
        </template>

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
        <router-view></router-view>
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
import menuSetting from "@/constants/menu/index.js";

import { defineComponent, ref, reactive } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    Logo,
  },
  setup() {
    const router = useRouter();

    const toPage = (link: string | undefined) => {
      if (!link) return;
      router.push(link);
    };

    return {
      selectedKeys: ref<string[]>(["1"]),
      collapsed: ref<boolean>(false),
      openKeys: ref<string[]>([]),
      menu: reactive(menuSetting),

      toPage,
    };
  },
});
</script>
<style lang="scss" scoped></style>
