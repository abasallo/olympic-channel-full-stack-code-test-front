import { sortAthletesByGameScore } from './sorting'

const athletesByGameScore = {
  game: { id: 2, city: 'Rio de Janeiro', year: 2016 },
  athletes: [
    {
      id: 2,
      name: 'Lidia',
      surname: 'Valentin Perez',
      athleteResults: [
        { id: '2-2', gold: 0, silver: 0, bronze: 1 },
        { id: '2-3', gold: 1, silver: 0, bronze: 0 },
        { id: '2-8', gold: 0, silver: 1, bronze: 0 }
      ]
    },
    { id: 3, name: 'Chase', surname: 'Kalisz', athleteResults: [{ id: '3-2', gold: 0, silver: 1, bronze: 0 }] },
    {
      id: 4,
      name: 'Andy',
      surname: 'Murray',
      athleteResults: [
        { id: '4-2', gold: 1, silver: 0, bronze: 0 },
        { id: '4-3', gold: 1, silver: 1, bronze: 0 }
      ]
    },
    {
      id: 5,
      name: 'Usain',
      surname: 'Bolt',
      athleteResults: [
        { id: '5-2', gold: 3, silver: 0, bronze: 0 },
        { id: '5-3', gold: 3, silver: 0, bronze: 0 },
        { id: '5-8', gold: 2, silver: 0, bronze: 0 }
      ]
    },
    {
      id: 17,
      name: 'Michael',
      surname: 'Phelps',
      athleteResults: [
        { id: '17-2', gold: 5, silver: 1, bronze: 0 },
        { id: '17-3', gold: 4, silver: 2, bronze: 0 },
        { id: '17-8', gold: 8, silver: 0, bronze: 0 },
        { id: '17-9', gold: 6, silver: 0, bronze: 2 }
      ]
    }
  ]
}

test('Calculates global score for a given Game', () => {
  const sortedAthletesByGameScore = sortAthletesByGameScore(athletesByGameScore)
  expect(sortedAthletesByGameScore[0].id).toBe(17)
  expect(sortedAthletesByGameScore[1].id).toBe(5)
  expect(sortedAthletesByGameScore[2].id).toBe(4)
  expect(sortedAthletesByGameScore[3].id).toBe(3)
  expect(sortedAthletesByGameScore[4].id).toBe(2)
})
