<template>
  <a-table :columns="columns" :data-source="dataSource" bordered>
    <template #bodyCell="{ column, text, record }">
      <template v-if="['name', 'age', 'address'].includes(column.dataIndex)">
        <div>
          <a-input
            v-if="editableData[record.key]"
            v-model:value="editableData[record.key][column.dataIndex]"
            style="margin: -5px 0"
          />
          <template v-else>{{ text }}</template>
        </div>
      </template>
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
  },
  {
    title: "作者",
    dataIndex: "auther",
    width: "25%",
  },
  {
    title: "時間",
    dataIndex: "time",
    width: "15%",
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

    const edit = (key: string) => {
      editableData[key] = {
        ...dataSource.value.filter((item) => key === item.key)[0],
      };
    };
    const save = (key: string) => {
      Object.assign(
        dataSource.value.filter((item) => key === item.key)[0],
        editableData[key]
      );
      delete editableData[key];
    };
    const cancel = (key: string) => {
      delete editableData[key];
    };
    return {
      dataSource,
      columns,
      editingKey: "",
      editableData,
      edit,
      save,
      cancel,
    };
  },
});
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
