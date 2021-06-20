<template>
  <div
    class="sort-btn"
    :data-by="column"
    data-direction="desc"
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
</template>
<script>
export default {
  name: 'DataTableHeadItem',
  props: ['sort'],
  methods: {
    changeSort: function () {
      console.log('sort')
    },
  },
}
</script>
