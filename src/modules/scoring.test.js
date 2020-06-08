import { score } from './scoring'

const athleteResults = [
  { id: '1-4', gold: 1, silver: 1, bronze: 1 },
  { id: '1-5', gold: 0, silver: 1, bronze: 2 },
  { id: '1-6', gold: 0, silver: 0, bronze: 1 },
  { id: '1-7', gold: 0, silver: 0, bronze: 1 }
]

test('Calculates global score for a given Game', () => {
  expect(score(athleteResults, 4)).toBe(9)
  expect(score(athleteResults, 5)).toBe(5)
  expect(score(athleteResults, 6)).toBe(1)
  expect(score(athleteResults, 7)).toBe(1)
})
