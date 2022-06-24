<template>
  <a-table :columns="columns" :data-source="dataSource" bordered>
    <template #bodyCell="{ text }">
      <div>{{ text }}</div>
    </template>
  </a-table>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
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
    const dataSource = ref(data);
    const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

    return {
      dataSource,
      columns,
      editingKey: "",
      editableData,
    };
  },
});
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
