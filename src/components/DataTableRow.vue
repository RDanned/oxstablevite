<template>
  <tr @click="select">
    <td v-for="collumn in collumns" :key="collumn">
      {{ row[collumn] }}
    </td>
  </tr>
</template>
<script>
import {actionTypes} from '@/store/modules/data'

export default {
  name: 'DataTableRow',
  props: {
    row: Object,
    collumns: Array,
  },
  methods: {
    select: function () {
      this.$store.dispatch(actionTypes.setSelected, {selected: this.row})
      document.getElementById('detail').scrollIntoView()
    },
  },
}
</script>
