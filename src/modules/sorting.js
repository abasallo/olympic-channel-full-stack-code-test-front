import { score } from './scoring'

export const sortAthletesByGameScore = (athletesByGameScore) => {
  athletesByGameScore.athletes = athletesByGameScore.athletes.sort((a, b) => {
    const globalScoreA = score(a.athleteResults, athletesByGameScore.game.id)
    const globalScoreB = score(b.athleteResults, athletesByGameScore.game.id)
    return globalScoreA < globalScoreB ? 1 : globalScoreB < globalScoreA ? -1 : 0
  })
  return athletesByGameScore.athletes
}
