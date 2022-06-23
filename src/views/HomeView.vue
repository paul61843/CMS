<template>
  <a-layout class="h-screen">
    <app-sider :collapsed="collapsed"></app-sider>
    <a-layout>
      <app-header
        :collapsed="collapsed"
        @changeCollapsed="collapsed = $event"
      ></app-header>
      <app-content></app-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

import Sider from "@/layouts/sider.vue";
import Header from "@/layouts/header.vue";
import Content from "@/layouts/content.vue";

export default defineComponent({
  components: {
    "app-sider": Sider,
    "app-header": Header,
    "app-content": Content,
  },
  setup() {
    const router = useRouter();

    const toPage = (link: string | undefined) => {
      if (!link) return;
      router.push(link);
    };

    return {
      toPage,
      collapsed: ref(false),
    };
  },
});
</script>
<style lang="scss" scoped></style>
