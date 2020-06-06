import { GET_ATHLETES_BY_GAME, GET_ATHLETE } from './AthleteQueries'

test('Gets list of games with present Athletes included', () => expect(GET_ATHLETES_BY_GAME).toMatchSnapshot())

test('Gets specific Athlete data by ID', () => expect(GET_ATHLETE).toMatchSnapshot())
