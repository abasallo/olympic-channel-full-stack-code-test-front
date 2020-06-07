import React from 'react'

import AthleteDetailMedals from './AthleteDetailMedals'

const athleteResults = [
  { id: '1-4', gold: 1, silver: 1, bronze: 1, game: { id: 4, city: 'Pyeongchang', year: 2018 } },
  { id: '1-5', gold: 0, silver: 1, bronze: 2, game: { id: 5, city: 'Sochi', year: 2014 } },
  { id: '1-6', gold: 0, silver: 0, bronze: 1, game: { id: 6, city: 'Vancouver', year: 2010 } },
  { id: '1-7', gold: 0, silver: 0, bronze: 1, game: { id: 7, city: 'Turin', year: 2006 } }
]

test('Renders properly', () => expect(<AthleteDetailMedals athleteResults={athleteResults} />).toMatchSnapshot())
