<template>
  <div class="dk:relative dk:overflow-x-auto dk:rounded-lg dk:border dk:border-zinc-200 dk:dark:border-zinc-700 dk:shadow-sm">
    <table class="dk:w-full dk:text-sm dk:text-left dk:text-zinc-700 dk:dark:text-zinc-300">
      <thead class="dk:text-xs dk:uppercase dk:tracking-wide dk:bg-zinc-50 dk:dark:bg-zinc-800 dk:text-zinc-500 dk:dark:text-zinc-400">
        <tr>
          <th
            v-for="column in props.columns"
            :key="column.name"
            :class="['dk:px-6 dk:py-3 dk:font-semibold', column.classes]">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody :class="{ 'dk:opacity-50 dk:pointer-events-none': props.loading }">
        <tr
          v-for="(item, index) in props.rows"
          :key="index"
          class="dk:bg-white dk:border-b dk:border-zinc-200 dk:dark:bg-zinc-900 dk:dark:border-zinc-700 dk:hover:bg-zinc-50 dk:dark:hover:bg-zinc-800/60 dk:transition-colors">
          <td
            v-for="column in props.columns"
            :key="column.name"
            class="dk:px-6 dk:py-4 dk:text-zinc-900 dk:dark:text-zinc-100">
            <slot :name="column.name" v-bind="item">
              {{ (item as any)[column.name] }}
            </slot>
          </td>
        </tr>
        <tr v-if="!props.loading && props.rows.length === 0">
          <td :colspan="props.columns.length" class="dk:px-6 dk:py-10 dk:text-center dk:text-zinc-400 dk:dark:text-zinc-500">
            <slot name="empty">Sin registros</slot>
          </td>
        </tr>
      </tbody>
      <tfoot v-if="props.pagination" class="dk:bg-zinc-50 dk:dark:bg-zinc-800 dk:border-t dk:border-zinc-200 dk:dark:border-zinc-700">
        <tr>
          <td :colspan="props.columns.length" class="dk:px-6 dk:py-4">
            <div class="dk:flex dk:items-center dk:justify-between dk:gap-4 dk:flex-wrap">
              <div class="dk:text-sm dk:text-zinc-500 dk:dark:text-zinc-400">
                Página {{ props.pagination.page }} de {{ totalPages }} · {{ props.pagination.total }} registros
              </div>
              <div class="dk:flex dk:items-center dk:gap-1 dk:flex-wrap">
                <DuiButton
                  variant="outline"
                  color="neutral"
                  size="sm"
                  @click="emitPaginate(props.pagination.page - 1)"
                  :disabled="props.pagination.page === 1">
                  ← Anterior
                </DuiButton>
                <button
                  v-for="pageNum in pageNumbers"
                  :key="pageNum"
                  @click="emitPaginate(pageNum)"
                  :class="['dk:min-w-9 dk:h-9 dk:px-2 dk:rounded-lg dk:text-sm dk:transition-colors dk:cursor-pointer',
                    pageNum === props.pagination.page
                      ? 'dk:bg-teal-600 dk:text-white dk:hover:bg-teal-500'
                      : 'dk:text-zinc-600 dk:dark:text-zinc-300 dk:hover:bg-zinc-200 dk:dark:hover:bg-zinc-700']">
                  {{ pageNum }}
                </button>
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

export interface DuiTableProps {
  columns: TableColumn[]
  rows: Array<any>
  loading?: boolean
  pagination?: PaginationData
}

const props = withDefaults(defineProps<DuiTableProps>(), {
  loading: false,
  pagination: undefined,
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

