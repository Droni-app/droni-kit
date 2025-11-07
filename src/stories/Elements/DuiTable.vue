<template>
  <div class="dk:relative dk:overflow-x-auto dk:shadow-md dk:sm:rounded-lg">
    <table class="dk:w-full dk:text-sm dk:text-left dk:text-gray-700 dk:dark:text-gray-300">
      <thead class="dk:text-xs dk:uppercase dk:bg-gray-100 dk:dark:bg-gray-700 dk:dark:text-gray-200 dk:relative">
        <tr>
          <th
            v-for="column in props.columns"
            :key="column.name"
            :class="['dk:px-6 dk:py-3', column.classes]">
            {{ column.label }}
          </th>
        </tr>
        <tr v-if="props.loading">
          <td :colspan="props.columns.length" class="dk:p-0">
            <div class="loading-bar"></div>
          </td>
        </tr>
      </thead>
      <tbody :class="{ 'is-loading': props.loading }">
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
      <tfoot v-if="props.pagination" class="dk:bg-gray-50 dk:dark:bg-gray-700 dk:border-t dk:border-gray-200 dk:dark:border-gray-600">
        <tr>
          <td :colspan="props.columns.length" class="dk:px-6 dk:py-4">
            <div class="pagination-container">
              <div class="pagination-info">
                Página {{ props.pagination.page }} de {{ totalPages }} | {{ props.pagination.total }} registros
              </div>
              <div class="pagination-buttons">
                <DuiButton
                  variant="outline"
                  color="neutral"
                  size="sm"
                  @click="emitPaginate(props.pagination.page - 1)"
                  :disabled="props.pagination.page === 1">
                  ← Anterior
                </DuiButton>
                <div class="page-numbers">
                  <button
                    v-for="pageNum in pageNumbers"
                    :key="pageNum"
                    @click="emitPaginate(pageNum)"
                    :class="['page-number', { active: pageNum === props.pagination.page }]">
                    {{ pageNum }}
                  </button>
                </div>
                <DuiButton
                  variant="outline"
                  color="neutral"
                  size="sm"
                  @click="emitPaginate(props.pagination.page + 1)"
                  :disabled="props.pagination.page === totalPages">
                  Siguiente →
                </DuiButton>
              </div>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import DuiButton from '../Forms/DuiButton.vue'

export interface TableColumn {
  label: string
  name: string
  classes?: string
}

export interface PaginationData {
  page: number
  perPage: number
  total: number
}

const props = defineProps({
  columns: {
    type: Array<TableColumn>,
    required: true
  },
  rows: {
    type: Array<any>,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  },
  pagination: {
    type: Object as () => PaginationData | undefined,
    default: undefined
  }
})

const emit = defineEmits<{
  paginate: [page: number]
}>()

const totalPages = computed(() => {
  if (!props.pagination) return 0
  return Math.ceil(props.pagination.total / props.pagination.perPage)
})

const pageNumbers = computed(() => {
  if (!props.pagination) return []
  const pages: number[] = []
  const maxVisible = 5
  const { page } = props.pagination
  const total = totalPages.value

  let start = Math.max(1, page - Math.floor(maxVisible / 2))
  let end = Math.min(total, start + maxVisible - 1)

  if (end - start < maxVisible - 1) {
    start = Math.max(1, end - maxVisible + 1)
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})

const emitPaginate = (page: number) => {
  if (!props.pagination) return
  if (page >= 1 && page <= totalPages.value) {
    emit('paginate', page)
  }
}
</script>

<style scoped>
.loading-bar-row {
  height: 4px;
  display: none;
}

.loading-bar-row[style*="display: table-row"] {
  display: table-row;
}

.loading-bar {
  height: 4px;
  width: 100%;
  background: linear-gradient(
    90deg,
    #a3a3a3 0%,
    #d4d4d4 20%,
    #e5e5e5 40%,
    #ff1493 50%,
    #e5e5e5 60%,
    #d4d4d4 80%,
    #a3a3a3 100%
  );
  background-size: 200% 100%;
  animation: gradientShift 4s ease-in-out infinite;
}

tbody.is-loading {
  opacity: 0.5;
  pointer-events: none;
}

.pagination-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.pagination-info {
  color: #6b7280;
  font-size: 0.875rem;
}

.dark .pagination-info {
  color: #d1d5db;
}

.pagination-buttons {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.page-numbers {
  display: flex;
  gap: 0.25rem;
}

.page-number {
  min-width: 2.5rem;
  padding: 0.5rem;
  background-color: white;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s;
}

.dark .page-number {
  background-color: #374151;
  border-color: #4b5563;
  color: #f3f4f6;
}

.page-number:hover {
  background-color: #f3f4f6;
  border-color: #9ca3af;
}

.dark .page-number:hover {
  background-color: #4b5563;
  border-color: #6b7280;
}

.page-number.active {
  background-color: #3b82f6;
  border-color: #3b82f6;
  color: white;
}

.dark .page-number.active {
  background-color: #3b82f6;
  border-color: #3b82f6;
  color: white;
}

@keyframes gradientShift {
  0% {
    background-position: 200% 0;
  }
  50% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>