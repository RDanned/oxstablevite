<template>
  <div class="col-12 d-flex justify-content-center" v-if="selected">
    <div id="detail">
      Выбран пользователь<br />
      <b>{{ `${selected.lastName} ${selected.firstName}` }}</b
      ><br />
      Описание:<br />
      <textarea :value="selected.description"> </textarea> <br />
      Адрес проживания: <b>{{ selected.street }}</b> <br />
      Город:<b>{{ selected.city }}</b> <br />
      Провинция/штат: <b>{{ selected.state }}</b> <br />
      Индекс: <b>{{ selected.zip }}</b>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
  name: 'DataTableSelected',
  computed: {
    ...mapState({
      selected: (state) => state.data.selected,
    }),
  },
}
</script>
