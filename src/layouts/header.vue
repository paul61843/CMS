<template>
  <a-layout-header class="flex justify-between items-center px-4" style="background: #fff">
    <menu-unfold-outlined
      v-if="collapsed"
      class="trigger"
      @click="changeCollapsed()"
    />
    <menu-fold-outlined v-else class="trigger" @click="changeCollapsed()" />
    <user-dropdown></user-dropdown>
  </a-layout-header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import { useGlobalStore } from "@/stores/global";
import UserDropdown from "@/components/header/UserDropdown.vue";

export default defineComponent({
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserDropdown,
  },

  setup() {
    const globalStore = useGlobalStore();
    const { collapsed } = storeToRefs(globalStore);

    return {
      collapsed,
      changeCollapsed: globalStore.changeCollapsed,
    };
  },
});
</script>
