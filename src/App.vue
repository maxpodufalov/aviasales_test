<template>
  <div id="app" class="app">
    <picture>
      <source srcset="./assets/images/logo1x.png 1x">
      <img src="~@/assets/images/logo1x.png" alt="logo">
    </picture>
    <div class="app__container">
      <TransfersFilter
              :tickets="getAllTickets"
              @changeFilter="filter"
      />
      <div class="app__content">
        <PriceSpeedFilter :tickets="getAllTickets"/>
        <div class="tickets">
          <TicketsItem v-for="(item, index) in filteredTickets"
                       :key="index"
                       :data="item"
                       :tickets="filteredTickets"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import PriceSpeedFilter from '@/components/PriceSpeedFilter'
  import TransfersFilter from '@/components/TransfersFilter'
  import TicketsItem from '@/components/TicketsItem'

  export default {
    name: 'App',
    components: {TransfersFilter, PriceSpeedFilter, TicketsItem},

    data: () => ({
      stopFilters: [],
    }),

    computed: {
      ...mapGetters(['getAllTickets', 'getSearchId']),
      filteredTickets() {
        if (this.stopFilters.includes(-1)) {
          return this.getAllTickets
        }
        if (this.stopFilters.length) {
          let res = []

          this.stopFilters.forEach(n => {
            this.getAllTickets.filter((item) => {
              if (item.segments[0].stops.length === n ||
                  item.segments[1].stops.length === n) {
                if (!res.includes(item)) {
                  res.push(item)
                }
              }
            })
          })
          return res
        } else {
          return this.getAllTickets
        }
      },
    },

    created() {
      this.$store.dispatch('fetchSearchId')
    },

    methods: {
      filter(count) {
        this.stopFilters = count
      }
      ,
    }
  }
</script>

<style></style>
