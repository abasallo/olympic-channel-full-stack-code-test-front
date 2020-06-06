import { apolloClient } from './graphql/apolloClient'

import { GET_ATHLETES_BY_GAME, GET_ATHLETE } from './graphql/AthleteQueries'

export const getAthletesByGame = async () => {
  const { data } = await apolloClient.query({ query: GET_ATHLETES_BY_GAME })
  return data.getAthletesByGame
}

export const getAthlete = async (id) => {
  const { data } = await apolloClient.query({ query: GET_ATHLETE, variables: { id: id } })
  return data.getAthlete
}
