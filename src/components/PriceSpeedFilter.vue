<template>
  <div class="price-filter">
    <button class="price-filter__button"
            type="button"
            @click="sortByPrice"
            :class="{ 'price-filter__button_active': sortedByPrice }">
      Самый дешевый
    </button>
    <button class="price-filter__button"
            type="button"
            @click="sortBySpeed"
            :class="{ 'price-filter__button_active': sortedBySpeed }">
      Самый быстрый
    </button>
  </div>
</template>

<script>
  export default {
    name: 'PriceFilter',

    props: {
      tickets: {
        type: Array,
        required: true,
      }
    },

    data: () => ({
      sortedByPrice: false,
      sortedBySpeed: false,
    }),

    methods: {
      sortByPrice() {
        let res = this.tickets.sort((a, b) => {
          let keyA = a.price
          let keyB = b.price
          return keyA > keyB ? 1 : -1
        })
        this.$store.commit('setTickets', res)
        this.sortedByPrice = true
        this.sortedBySpeed = false
      },
      sortBySpeed() {
        let res = this.tickets.sort((a, b) => {
          let keyA = a.segments[0].duration + a.segments[1].duration
          let keyB = b.segments[0].duration + b.segments[1].duration
          return keyA > keyB ? 1 : -1
        })
        this.$store.commit('setTickets', res)
        this.sortedBySpeed = true
        this.sortedByPrice = false
      },
    }
  }
</script>

<style scoped>

</style>