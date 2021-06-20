import {createRouter, createWebHashHistory} from 'vue-router'
import DataTable from '@/components/DataTable.vue'
import DataChoose from '@/components/DataChoose.vue'

const routes = [
  {
    path: '/dataset/:type',
    name: 'dataset',
    component: DataTable,
    props: true 
  },
  {
    path: '/',
    component: DataChoose,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
