<script setup lang="ts">

</script>

<template>
  <router-view></router-view>
</template>

<script>
import { Button } from 'ant-design-vue';
const ButtonGroup = Button.Group;
  
export default {
  components: {
    AButton: Button,
    AButtonGroup: ButtonGroup,
  },
};
</script>


<style>

</style>
