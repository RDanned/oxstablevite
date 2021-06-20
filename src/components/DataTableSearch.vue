<template>
  <div class="row search">
    <div class="col-4">
      <input
        id="search_field"
        type="text"
        class="form-control search__input"
        v-model="searchString"
        placeholder="your search string"
      />
    </div>
    <div class="col-2 search__submit">
      <input
        type="submit"
        value="Search"
        class="form-control col-3"
        @click="search"
      />
    </div>
    <div class="col-2 search__reset">
      <input
        type="reset"
        value="Reset"
        class="form-control col-3"
        @click="reset"
      />
    </div>
  </div>
</template>
<script>
import {actionTypes} from '@/store/modules/data'

export default {
  name: 'DataTableSearch',
  data() {
    return {
      searchString: '',
    }
  },
  methods: {
    search: function () {
      this.$store.dispatch(actionTypes.setSearchString, {
        searchString: this.searchString,
      })
    },
    reset: function () {
      this.searchString = ''
      this.$store.dispatch(actionTypes.setSearchString, {
        searchString: '',
      })
    },
  },
}
</script>
