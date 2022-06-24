<template>
  <a-form
    class="max-w-lg m-auto"
    :layout="formState.layout"
    :model="formState"
    v-bind="formItemLayout"
  >
    <a-form-item label="標題">
      <a-input v-model:value="formState.fieldA" placeholder="請輸入標題" />
    </a-form-item>
    <a-form-item label="簡介">
      <a-textarea v-model:value="formState.fieldB" placeholder="請輸入簡介" />
    </a-form-item>
    <a-form-item label="內容">
      <a-textarea v-model:value="formState.fieldC" placeholder="請輸入內容" />
    </a-form-item>
    <a-form-item label="文章公開狀態">
      <a-radio-group v-model:value="formState.fieldD">
        <a-radio :value="1">公開</a-radio>
        <a-radio :value="2">部分公開</a-radio>
        <a-radio :value="3">私有</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <a-button type="primary">提交</a-button>
      <a-button type="default">重置</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import type { UnwrapRef } from "vue";

interface FormState {
  layout: "horizontal" | "vertical" | "inline";
  fieldA: string;
  fieldB: string;
  fieldC: string;
  fieldD: string;
}

export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      layout: "vertical",
      fieldA: "",
      fieldB: "",
      fieldC: "",
      fieldD: "",
    });
    const formItemLayout = computed(() => {
      const { layout } = formState;
      return layout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : {};
    });
    const buttonItemLayout = computed(() => {
      const { layout } = formState;
      return layout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : {};
    });
    return {
      formState,
      formItemLayout,
      buttonItemLayout,
    };
  },
});
</script>
