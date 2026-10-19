<template>
  <div class="dk:relative dk:overflow-x-auto dk:rounded-xl dk:border dk:border-neutral-200 dk:bg-white dk:shadow-xs dk:dark:border-white/10 dk:dark:bg-neutral-900">
    <table class="dk:w-full dk:text-sm dk:text-left dk:text-neutral-700 dk:dark:text-neutral-300">
      <thead class="dk:text-xs dk:uppercase dk:tracking-wide dk:bg-neutral-50 dk:dark:bg-white/[0.03] dk:text-neutral-500 dk:dark:text-neutral-400 dk:border-b dk:border-neutral-200 dk:dark:border-white/10">
        <tr>
          <th
            v-for="column in props.columns"
            :key="column.name"
            :class="['dk:px-4 dk:sm:px-6 dk:py-3 dk:font-semibold dk:whitespace-nowrap', column.classes]">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody :class="{ 'dk:opacity-50 dk:pointer-events-none': props.loading }">
        <tr
          v-for="(item, index) in props.rows"
          :key="index"
          class="dk:border-b dk:border-neutral-100 dk:last:border-b-0 dk:dark:border-white/5 dk:hover:bg-neutral-50 dk:dark:hover:bg-primary-500/[0.04] dk:transition-colors">
          <td
            v-for="column in props.columns"
            :key="column.name"
            class="dk:px-4 dk:sm:px-6 dk:py-3.5 dk:text-neutral-900 dk:dark:text-neutral-100">
            <slot :name="column.name" v-bind="item">
              {{ (item as any)[column.name] }}
            </slot>
          </td>
        </tr>
        <tr v-if="!props.loading && props.rows.length === 0">
          <td :colspan="props.columns.length" class="dk:px-4 dk:sm:px-6 dk:py-10 dk:text-center dk:text-neutral-400 dk:dark:text-neutral-500">
            <slot name="empty">Sin registros</slot>
          </td>
        </tr>
      </tbody>
      <tfoot v-if="props.pagination" class="dk:bg-neutral-50 dk:dark:bg-white/[0.03] dk:border-t dk:border-neutral-200 dk:dark:border-white/10">
        <tr>
          <td :colspan="props.columns.length" class="dk:px-4 dk:sm:px-6 dk:py-3">
            <div class="dk:flex dk:items-center dk:justify-between dk:gap-4 dk:flex-wrap">
              <div class="dk:text-sm dk:text-neutral-500 dk:dark:text-neutral-400">
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
                      ? 'dk:bg-primary-600 dk:text-white dk:hover:bg-primary-500 dk:dark:bg-primary-500 dk:dark:shadow-glow-primary'
                      : 'dk:text-neutral-600 dk:dark:text-neutral-300 dk:hover:bg-neutral-200 dk:dark:hover:bg-white/5']">
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

