<template>
  <div class="col-12 choose-link-container">
    <router-link
      class="choose-link"
      :to="{name: 'dataset', params: {type: 'small'}}"
    >
      <div>Small dataset(32 rows)</div>
    </router-link>
    <router-link
      class="choose-link"
      :to="{name: 'dataset', params: {type: 'big'}}"
    >
      <div>Big dataset(1000 rows)</div>
    </router-link>
  </div>
</template>
