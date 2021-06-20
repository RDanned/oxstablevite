<template>
  <div class="col-12 d-flex justify-content-center flex-column">
    <button class="btn btn-primary" @click="toggleAdd" v-if="!isAdding">
      add new row
    </button>

    <table class="table table-bordered" v-if="isAdding">
      <thead>
        <tr>
          <th :class="[{'text-danger': v$.row.id.$error}]">
            id
            <span v-if="v$.row.id.$error">
              (must be numeric and required)
            </span>
          </th>
          <th :class="[{'text-danger': v$.row.firstName.$error}]">
            firstName
            <span v-if="v$.row.firstName.$error"> (required) </span>
          </th>
          <th :class="[{'text-danger': v$.row.lastName.$error}]">
            lastName
            <span v-if="v$.row.lastName.$error"> (required) </span>
          </th>
          <th :class="[{'text-danger': v$.row.email.$error}]">
            email
            <span v-if="v$.row.email.$error">
              (must be email and required)
            </span>
          </th>
          <th :class="[{'text-danger': v$.row.phone.$error}]">
            phone
            <span v-if="v$.row.phone.$error"> (required) </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input
              type="text"
              v-model.trim="v$.row.id.$model"
              :class="['form-control', {'is-invalid': v$.row.id.$error}]"
            />
          </td>
          <td>
            <input
              type="text"
              v-model.trim="v$.row.firstName.$model"
              :class="['form-control', {'is-invalid': v$.row.firstName.$error}]"
            />
          </td>
          <td>
            <input
              type="text"
              v-model.trim="v$.row.lastName.$model"
              :class="['form-control', {'is-invalid': v$.row.lastName.$error}]"
            />
          </td>
          <td>
            <input
              type="email"
              v-model.trim="v$.row.email.$model"
              :class="['form-control', {'is-invalid': v$.row.email.$error}]"
            />
          </td>
          <td>
            <input
              type="text"
              v-model.trim="v$.row.phone.$model"
              v-mask="'(###)###-####'"
              :class="['form-control', {'is-invalid': v$.row.phone.$error}]"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <button v-if="isAdding" class="btn btn-primary mb-4" @click="save">
      save
    </button>
  </div>
</template>
<script>
import {actionTypes} from '@/store/modules/data'
import {required, numeric, email} from '@vuelidate/validators'
import useValidate from '@vuelidate/core'

export default {
  name: 'DataTableSearch',
  props: {
    collumns: {
      type: Array,
    },
  },
  data() {
    return {
      v$: useValidate(),
      isAdding: false,
      row: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
    }
  },
  validations() {
    return {
      row: {
        id: {required, numeric},
        firstName: {required},
        lastName: {required},
        email: {required, email},
        phone: {required},
      },
    }
  },
  methods: {
    save: function () {
      this.v$.$touch()
      if (this.v$.$error) return

      this.row.id = Number(this.row.id)
      this.$store.dispatch(actionTypes.addRow, {row: this.row})

      for (let prop in this.row) this.row[prop] = ''

      this.v$.$reset()
      this.toggleAdd()
    },
    toggleAdd: function () {
      this.isAdding = !this.isAdding
    },
  },
}
</script>
