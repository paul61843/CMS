<template>
  <a-layout-header class="px-4" style="background: #fff">
    <menu-unfold-outlined
      v-if="collapsed"
      class="trigger"
      @click="changeCollapsed()"
    />
    <menu-fold-outlined v-else class="trigger" @click="changeCollapsed()" />
  </a-layout-header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import { useGlobalStore } from "@/stores/global.js";

export default defineComponent({
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  },
  emits: ["changeCollapsed"],

  setup(props, { emit }) {
    const globalStore = useGlobalStore();
    const { collapsed } = storeToRefs(globalStore);

    return {
      collapsed,
      changeCollapsed: globalStore.changeCollapsed,
    };
  },
});
</script>
<style lang=""></style>
