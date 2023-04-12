export interface MovieType {
  [key: string]: string | string[] | undefined
  Title: string
  Year: string
  Rated?: string
  Released: string
  Runtime: string
  Genre: string
  Director?: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Video: string
  Poster: string
  Metascore?: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  totalSeasons?: string
  Response: string
  Images: string[]
}
