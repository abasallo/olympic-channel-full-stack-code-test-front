export const score = (athleteResults, gameId) => {
  if (athleteResults && gameId) {
    const filteredByGameId = athleteResults.filter((_) => _.id.endsWith(gameId)).pop()
    return filteredByGameId.gold * 5 + filteredByGameId.silver * 3 + filteredByGameId.bronze
  }
  return 0
}
