<template>
  <a-form :layout="formState.layout" :model="formState" v-bind="formItemLayout">
    <a-form-item>
      <a-input-search
        v-model:value="formState.search"
        placeholder="input search text"
        style="width: 200px"
        @search="onSearch()"
      />
    </a-form-item>
  </a-form>
  <a-table :columns="columns" :data-source="filteredData" bordered>
    <template #bodyCell="{ text }">
      <div>{{ text }}</div>
    </template>
  </a-table>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, computed } from "vue";
import type { UnwrapRef } from "vue";

const columns = [
  {
    title: "標題",
    dataIndex: "title",
    width: "60%",
    sorter: {
      compare: (a, b) => (a.title > b.title ? 1 : -1),
      multiple: 1,
    },
  },
  {
    title: "作者",
    dataIndex: "auther",
    width: "25%",
    sorter: {
      compare: (a, b) => (a.auther > b.auther ? 1 : -1),
      multiple: 1,
    },
  },
  {
    title: "時間",
    dataIndex: "time",
    width: "15%",
    sorter: {
      compare: (a, b) => (a.time > b.time ? 1 : -1),
      multiple: 1,
    },
  },
];
export interface DataItem {
  key: string;
  title: string;
  auther: number;
  time: string;
}

interface FormState {
  layout: "horizontal" | "vertical" | "inline";
  search: string;
}

const data: DataItem[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    title: `Edrward ${i}`,
    auther: 32,
    time: `London Park no. ${i}`,
  });
}
export default defineComponent({
  setup() {
    const dataSource = data;
    const searchValue = ref("");

    const formState: UnwrapRef<FormState> = reactive({
      layout: "horizontal",
      search: "",
    });

    const formItemLayout = computed(() => {
      const { layout } = formState;
      return layout === "horizontal"
        ? {
            wrapperCol: { span: 14 },
          }
        : {};
    });

    const filteredData = computed(() => {
      return searchValue.value === ""
        ? dataSource
        : dataSource.filter((item) => item.title.includes(formState.search));
    });

    const onSearch = () => {
      searchValue.value = formState.search;
    };

    return {
      filteredData,
      columns,
      formState,
      formItemLayout,

      onSearch,
    };
  },
});
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
