<template>
  <nav>
    <ul class="pagination" v-if="pageCount">
      <li
        :class="['page-item', {active: index == currentPage}]"
        v-for="index in pageCount"
        :key="index"
      >
        <span class="page-link" :data-page="index" @click="changePage">{{
          index
        }}</span>
      </li>
    </ul>
  </nav>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
import {actionTypes} from '@/store/modules/data'

export default {
  name: 'DataTablePagination',
  props: {
    pageCount: {
      type: Number,
    },
  },
  computed: {
    ...mapState({
      currentPage: (state) => state.data.page,
    }),
    /* ...mapGetters({
      pageCount: 'getPageCount',
    }), */
  },
  methods: {
    changePage: function (e) {
      let page = e.currentTarget.dataset.page
      this.$store.dispatch(actionTypes.setPage, {page})
    },
  },
}
</script>
