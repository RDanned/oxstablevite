import dataApi from '@/api/data'

const state = {
  data: [],
  sort: {
    by: null,
    direction: null
  },
  page: 1,
  pageSize: 50,
  searchString: '',
  selected: null
}

export const mutationTypes = {
  setData: '[data] Set data',
  setSort: '[data] Set sort',
  setPage: '[data] Set page',
  setSearchString: '[data] Set search string',
  setSelected: '[data] Set selected',
}

export const actionTypes = {
  loadData: '[data] Load data',
  setSort: '[data] Set sort',
  setPage: '[data] Set page',
  setSearchString: '[data] Set search string',
  addRow: '[data] Add row',
  setData: '[data] Set data',
  setSelected: '[data] Set selected',
}

const mutations = {
  [mutationTypes.setData](state, payload) {
    state.data = payload.data
  },
  [mutationTypes.setSort](state, payload) {
    state.sort = payload.sort
  },
  [mutationTypes.setPage](state, payload) {
    state.page = payload.page
  },
  [mutationTypes.setSearchString](state, payload) {
    state.searchString = payload.searchString
  },
  [mutationTypes.setSelected](state, payload) {
    state.selected = payload.selected
  },
}

const actions = {
  [actionTypes.setData](context, {data}) {
    context.commit(mutationTypes.setData, {data})
  },
  [actionTypes.loadData](context, {count}) {
    return new Promise(resolve => {
      dataApi.getData(count).then(data => {
        context.commit(mutationTypes.setData, {data})
        resolve(data)
      })
    })
  },
  [actionTypes.setSort](context, {by, direction}) {
    context.commit(mutationTypes.setSort, {
      sort: {
        by,
        direction
      }
    })
  },
  [actionTypes.setPage](context, {page}) {
    context.commit(mutationTypes.setPage, {page})
  },
  [actionTypes.setSearchString](context, {searchString}) {
    context.commit(mutationTypes.setSearchString, {searchString})
  },
  [actionTypes.addRow](context, {row}){
    context.commit(mutationTypes.setData, {data: [{...row}, ...context.state.data]})
  },
  [actionTypes.setSelected](context, {selected}){
    context.commit(mutationTypes.setSelected, {selected})
  }
}

const getters = {
  getProcessedData: function(state){
    let output = state.data
    let sort = state.sort
    let page = state.page
    let pageSize = state.pageSize
    let searchString = state.searchString

    if (searchString) {
      output = output.filter((row) => {
        let searchedData = Object.values(row).join(' ');

        let regex = new RegExp(`(${searchString})`, 'gi')

        if (searchedData.search(regex) != -1) return true

        return false
      })
    }

    if(sort.by && sort.direction){
      output.sort(function (a, b) {
        if (typeof a[sort.by] == 'string') {
          if (sort.direction == 'desc') {
            if (a[sort.by] < b[sort.by]) return 1
            else return -1
          }
  
          if (sort.direction == 'asc') {
            if (a[sort.by] < b[sort.by]) return -1
            else return 1
          }
        } else if (typeof a[sort.by] == 'number') {
          if (sort.direction == 'asc') {
            if (a[sort.by] > b[sort.by]) {
              return -1
            }
            if (a[sort.by] < b[sort.by]) {
              return 1
            }
          } else {
            if (a[sort.by] < b[sort.by]) {
              return -1
            }
            if (a[sort.by] > b[sort.by]) {
              return 1
            }
          }
  
          return 0
        }
      })
    }
    

    let pageCount = Math.ceil(output.length / pageSize)

    output = output.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)

    return {data: output, pageCount}
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
