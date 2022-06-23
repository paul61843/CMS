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
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["changeCollapsed"],

  setup(props, { emit }) {
    const changeCollapsed = () => {
      emit("changeCollapsed", !props.collapsed);
    };

    return {
      changeCollapsed,
    };
  },
});
</script>
<style lang=""></style>
