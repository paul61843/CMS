<template>
  <a-dropdown>
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-menu-item key="1">
          <UserOutlined />
          1st menu item
        </a-menu-item>
        <a-menu-item key="2">
          <UserOutlined />
          2nd menu item
        </a-menu-item>
        <a-menu-item key="3">
          <UserOutlined />
          登出
        </a-menu-item>
      </a-menu>
    </template>
    <a-button>
      管理員
    </a-button>
  </a-dropdown>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UserOutlined } from "@ant-design/icons-vue";
import type { MenuProps } from "ant-design-vue";

export default defineComponent({
  components: {
    UserOutlined,
  },
  setup() {
    const handleButtonClick = (e: Event) => {
      console.log("click left button", e);
    };
    const handleMenuClick: MenuProps["onClick"] = (e) => {
      console.log("click", e);
    };
    return {
      handleButtonClick,
      handleMenuClick,
    };
  },
});
</script>

<style lang="scss" scoped></style>
