import axios from 'axios'

const state = {
  tickets: [],
  searchId: '',
}
const mutations = {
  setSearchId: (state, data) => {
    state.searchId = data
  },
  setTickets: (state, data) => {
    state.tickets = data
  }
}
const actions = {
  async fetchSearchId({commit, dispatch}) {
    await axios
        .get('https://front-test.beta.aviasales.ru/search')
        .then((response) => {
          if (response.status === 200 && response.data.searchId) {
            commit('setSearchId', response.data.searchId)
            dispatch('fetchTickets')
          }
        })
        .catch(function (error) {
          console.log(error)
        })
  },
  async fetchTickets({commit}) {
    await axios
        .get(`https://front-test.beta.aviasales.ru/tickets?searchId=${state.searchId}`)
        .then((response) => {
          if (response.status === 200 && response.data.tickets) {
            commit('setTickets', response.data.tickets.splice(0, 5))
          }
        }).catch(function (error) {
          console.log(error)
        })
  }
}
const getters = {
  getAllTickets: (state) => state.tickets,
  getSearchId: (state) => state.searchId
}

export default {
  state, getters, mutations, actions
}

