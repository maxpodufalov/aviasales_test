<template>
  <div class="tickets-item widget widget_ticket">
    <div class="tickets-item__row top">
      <span class="price">{{ formatPrice(data.price) }}</span>
      <img class="carrier"
           :src="`https://pics.avs.io/99/36/${data.carrier}.png`"
           :alt="`${data.carrier}`">
    </div>
    <!-- Tuda -->
    <div class="tickets-item__row">
      <div class="tickets-item__col">
        <span class="title">{{ toCityData.origin }} - {{ toCityData.destination }}</span>
        <span class="value">{{ formatDate(toCityData.date) }}</span>
      </div>
      <div class="tickets-item__col">
        <span class="title">В пути</span>
        <span class="value">{{ formatDuration(toCityData.duration) }}</span>
      </div>
      <div class="tickets-item__col">
        <template v-if="toCityData.stops.length">
          <span class="title">
            {{ toCityData.stops.length }}
            <template v-if="toCityData.stops.length === 1">
              пересадка
            </template>
            <template
                    v-if="toCityData.stops.length > 1 && toCityData.stops.length < 5">
              пересадки
            </template>
          </span>
          <span class="value">{{ formatStops(toCityData.stops) }}</span>
        </template>
        <span class="title" v-else>
          Прямой рейс
        </span>
      </div>
    </div>
    <!-- Suda -->
    <div class="tickets-item__row">
      <div class="tickets-item__col">
        <span class="title">{{ fromCityData.origin }} - {{ fromCityData.destination }}</span>
        <span class="value">{{ formatDate(fromCityData.date) }}</span>
      </div>
      <div class="tickets-item__col">
        <span class="title">В пути</span>
        <span class="value">{{ formatDuration(fromCityData.duration) }}</span>
      </div>
      <div class="tickets-item__col">
        <template v-if="fromCityData.stops.length">
          <span class="title">
            {{ fromCityData.stops.length }}
            <template v-if="fromCityData.stops.length === 1">
              пересадка
            </template>
            <template
                    v-if="fromCityData.stops.length > 1 && fromCityData.stops.length < 5">
              пересадки
            </template>
          </span>
          <span class="value">{{ formatStops(fromCityData.stops) }}</span>
        </template>
        <span class="title" v-else>
          Прямой рейс
        </span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'TicketsItem',

    props: {
      data: {
        type: Object,
        required: true,
      },
      tickets: {
        type: Array,
        required: true,
      }
    },

    computed: {
      toCityData() {
        return this.data.segments[0]
      },
      fromCityData() {
        return this.data.segments[1]
      }
    },

    methods: {
      formatPrice(price) {
        return price.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' P'
      },
      formatDate(date) {
        let d = new Date(date)
        return `${('0' + d.getUTCHours()).slice(-2)}:${('0' + d.getUTCMinutes()).slice(-2)}`
      },
      formatDuration(duration) {
        let hours = duration / 60
        let rhours = Math.floor(hours)
        let minutes = (hours - rhours) * 60
        let rminutes = Math.round(minutes)
        return `${rhours}ч ${rminutes}м`
      },
      formatStops(stopsArr) {
        return stopsArr.join(', ')
      }
    }
  }
</script>

<style scoped>
</style>