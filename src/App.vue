<template>
  <div class="container app">
    <div class="row">
      <div class="col-12">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/lib/bootstrap5/css/bootstrap.css'
import '@/assets/css/style.css'
import DataTable from '@/components/DataTable.vue'

export default {
  name: 'App',
  components: {DataTable},
}
</script>
