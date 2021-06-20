<template>
  <data-table-preloader v-if="isLoading" />
  <template v-else>
    <data-table-search />
    <data-table-add :collumns="collumns" />
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <td v-for="collumn in collumns" :key="collumn">
            <div
              class="sort-btn"
              :data-by="collumn"
              :data-direction="
                sort.by != collumn
                  ? 'desc'
                  : sort.direction == 'desc'
                  ? 'asc'
                  : 'desc'
              "
              @click="changeSort"
            >
              <span class="sort-btn__text">{{ collumn }}</span>
              <span class="sort-btn__icon">
                <font-awesome-icon
                  v-if="sort.direction === 'asc' && sort.by === collumn"
                  icon="sort-amount-up"
                />
                <font-awesome-icon v-else icon="sort-amount-down-alt" />
              </span>
            </div>
          </td>
        </tr>
      </thead>
      <tbody>
        <data-table-row
          v-for="row in output.data"
          :key="row.id + row.phone"
          :collumns="collumns"
          :row="row"
        />
      </tbody>
    </table>
    <data-table-pagination :page-count="output.pageCount" />
    <data-table-selected />
  </template>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
import {actionTypes} from '@/store/modules/data'
import dataApi from '@/api/data'
import DataTableRow from '@/components/DataTableRow.vue'
import DataTablePagination from '@/components/DataTablePagination.vue'
import DataTableSearch from '@/components/DataTableSearch.vue'
import DataTableAdd from '@/components/DataTableAdd.vue'
import DataTablePreloader from '@/components/DataTablePreloader.vue'
import DataTableSelected from '@/components/DataTableSelected.vue'

export default {
  name: 'DataTable',
  components: {
    DataTableRow,
    DataTablePagination,
    DataTableSearch,
    DataTableAdd,
    DataTablePreloader,
    DataTableSelected,
  },
  props: {
    type: String,
  },
  data() {
    return {
      isLoading: false,
      collumns: ['id', 'firstName', 'lastName', 'email', 'phone'],
    }
  },
  computed: {
    ...mapState({
      sort: (state) => state.data.sort,
      pageCount: (state) => state.data.length / state.data.pageSize,
    }),
    ...mapGetters({
      output: 'getProcessedData',
    }),
  },
  watch: {
    '$route.params': {
      handler({type}) {
        this.isLoading = true
        let count = 0

        if (type == 'small') count = 32
        else if (type == 'big') count = 1000

        dataApi.getData(count).then((data) => {
          this.$store.dispatch(actionTypes.setData, {data})
          this.isLoading = false
        })
      },
      immediate: true,
    },
  },
  methods: {
    changeSort: function (e) {
      let el = e.currentTarget
      this.$store.dispatch(actionTypes.setSort, {
        by: el.dataset.by,
        direction: el.dataset.direction,
      })
    },
  },
}
</script>
