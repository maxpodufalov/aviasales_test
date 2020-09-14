<template>
  <aside class="transfers-filter widget widget_transfers-filter">
    <h2 class="transfers-filter__title">Количество пересадок</h2>
    <div class="transfers-filter__wrapper">
      <input type="checkbox" id="all"
             class="transfers-filter__checkbox"
             :value="-1"
             v-model="selected"
             @change="filterTransfers()">
      <label class="transfers-filter__label" for="all">
        Все
      </label>
      <input type="checkbox" id="none"
             class="transfers-filter__checkbox"
             :value="0"
             v-model="selected"
             @change="filterTransfers()">
      <label class="transfers-filter__label" for="none">
        Без пересадок
      </label>
      <input type="checkbox" id="transfers1"
             class="transfers-filter__checkbox"
             :value="1"
             v-model="selected"
             @change="filterTransfers()">
      <label class="transfers-filter__label" for="transfers1">
        1 пересадка
      </label>
      <input type="checkbox" id="transfers2"
             class="transfers-filter__checkbox"
             :value="2"
             v-model="selected"
             @change="filterTransfers()">
      <label class="transfers-filter__label" for="transfers2">
        2 пересадки
      </label>
      <input type="checkbox" id="transfers3"
             class="transfers-filter__checkbox"
             :value="3"
             v-model="selected"
             @change="filterTransfers()">
      <label class="transfers-filter__label" for="transfers3">
        3 пересадки
      </label>
    </div>
  </aside>
</template>

<script>
  export default {
    name: 'TransfersFilter',

    props: {
      tickets: {
        type: Array,
        required: true,
      }
    },

    data: () => ({
      selected: [],
    }),

    methods: {
      filterTransfers() {
        this.$emit('changeFilter', this.selected)
      }
    }
  }
</script>

<style scoped>

</style>