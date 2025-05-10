<template>
  <div class="dk:relative dk:overflow-x-auto dk:shadow-md dk:sm:rounded-lg">
    <table class="dk:w-full dk:text-sm dk:text-left dk:text-gray-700 dk:dark:text-gray-300">
      <thead class="dk:text-xs dk:uppercase dk:bg-gray-100 dk:dark:bg-gray-700 dk:dark:text-gray-200">
        <tr>
          <th
            v-for="column in props.columns"
            :key="column.name"
            :class="['dk:px-6 dk:py-3', column.classes]">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in props.rows"
          :key="index"
          class="dk:bg-white dk:border-b dk:border-gray-200 dk:dark:bg-gray-800 dk:dark:border-gray-700 dk:hover:bg-gray-50 dk:dark:hover:bg-gray-600 dk:transition-colors">
          <td
            v-for="column in props.columns"
            :key="column.name"
            class="dk:px-6 dk:py-4 dk:text-gray-900 dk:dark:text-gray-100">
            <slot :name="column.name" v-bind="item">
              {{ (item as any)[column.name] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
export interface TableColumn {
  label: string
  name: string
  classes?: string
}
const props = defineProps({
  columns: {
    type: Array<TableColumn>,
    required: true
  },
  rows: {
    type: Array<any>,
    required: true
  }
})
</script>