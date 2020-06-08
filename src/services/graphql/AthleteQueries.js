import gql from 'graphql-tag'

export const GET_ATHLETES_BY_GAME = gql`
  query {
    getAthletesByGame {
      game {
        id
        city
        year
      }
      athletes {
        id
        name
        surname
        photo {
          id
          photo
          mimeType
        }
        athleteResults {
          id
          gold
          silver
          bronze
        }
      }
    }
  }
`

export const GET_ATHLETE = gql`
  query($id: String) {
    getAthlete(id: $id) {
      id
      name
      surname
      bio
      dateOfBirth
      weight
      height
      photo {
        id
        photo
        mimeType
      }
      athleteResults {
        id
        gold
        silver
        bronze
        game {
          id
          city
          year
        }
      }
    }
  }
`
