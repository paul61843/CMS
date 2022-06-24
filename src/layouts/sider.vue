<template>
  <a-layout-sider :collapsed="collapsed" :trigger="null" collapsible>
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
</template>
<script lang="ts">
import { PieChartOutlined, UserOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useGlobalStore } from "@/stores/global.js";
import Logo from "@/components/navigation/Logo.vue";
import menuSetting from "@/constants/menu/index.js";
import { storeToRefs } from "pinia";

export default defineComponent({
  components: {
    UserOutlined,
    PieChartOutlined,
    Logo,
  },
  setup() {
    const router = useRouter();
    const globalStore = useGlobalStore();
    const { collapsed } = storeToRefs(globalStore);

    const toPage = (link: string | undefined) => {
      if (!link) return;
      router.push(link);
    };

    return {
      selectedKeys: ref<string[]>(["1"]),
      openKeys: ref<string[]>([]),
      menu: reactive(menuSetting),
      collapsed,

      toPage,
    };
  },
});
</script>
<style lang=""></style>
