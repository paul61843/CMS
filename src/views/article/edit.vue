<template>
  <a-table :columns="columns" :data-source="dataSource" bordered>
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex !== 'operation'">
        <div>{{ text }}</div>
      </template>
      <template v-else>
        <div class="editable-row-operations">
          <span>
            <a @click="edit()">Edit</a>
          </span>
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
    title: "name",
    dataIndex: "name",
    width: "25%",
  },
  {
    title: "age",
    dataIndex: "age",
    width: "15%",
  },
  {
    title: "address",
    dataIndex: "address",
    width: "40%",
  },
  {
    title: "operation",
    dataIndex: "operation",
  },
];
interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
}
const data: DataItem[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
export default defineComponent({
  setup() {
    const dataSource = ref(data);
    const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

    const edit = () => {
      // TODO: show edit popup
    };
    return {
      dataSource,
      columns,
      editingKey: "",
      editableData,
      edit,
    };
  },
});
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
