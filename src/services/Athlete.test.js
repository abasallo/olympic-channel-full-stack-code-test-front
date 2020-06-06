import { apolloClient } from './graphql/apolloClient'

import { getAthletesByGame, getAthlete } from './Athlete'

import { GET_ATHLETES_BY_GAME, GET_ATHLETE } from './graphql/AthleteQueries'

jest.mock('./graphql/apolloClient', () => ({ apolloClient: { query: jest.fn(), mutate: jest.fn() } }))

beforeAll(() => {
  apolloClient.query.mockImplementation((_) => ({
    data: {
      getAthletesByGame: { query: _.query, variables: _.variables },
      getAthlete: { query: _.query, variables: _.variables }
    }
  }))
})

test('Get Athletes list by Game', () => expect(getAthletesByGame()).resolves.toEqual({ query: GET_ATHLETES_BY_GAME }))

test('Get Athlete by ID', () => expect(getAthlete('id')).resolves.toEqual({ query: GET_ATHLETE, variables: { id: 'id' } }))
