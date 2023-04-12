import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom"
import { createContext } from "react"
import data from "./data/movies.json"
import { useState } from "react"
import { Layout } from "./layouts/Layout"
import { Home } from "./pages/Home"
import { DetailMovie } from "./pages/DetailMovie"
import { MovieType } from "./types/moviesType"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/movie/:movie" element={<DetailMovie />} />
      <Route path="/all" element={<Navigate to="/" />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Route>
  )
)
export interface ContextValueInterface {
  movies: MovieType[]
  handleUpdate(filterType: "all" | "series" | "movie"): void
}
const MovieContext = createContext<ContextValueInterface>({
  movies: [],
  handleUpdate: () => {},
})
function App() {
  const [movies, setMovies] = useState<MovieType[]>(data)
  const [OriginalMovies, setOriginalMovies] = useState<MovieType[]>(data)
  const handleUpdate = (filterType: "all" | "series" | "movie"): void => {
    if (filterType === "all") {
      setMovies(OriginalMovies)
    }
    if (filterType === "movie") {
      const filteredMovies = OriginalMovies.filter(
        (movie) => movie.Type === "movie"
      )
      setMovies(filteredMovies)
    }
    if (filterType === "series") {
      const filteresMovies = OriginalMovies.filter(
        (movie) => movie.Type === "series"
      )
      setMovies(filteresMovies)
    }
  }
  const MovieContextValue: ContextValueInterface = { movies, handleUpdate }
  return (
    <MovieContext.Provider value={MovieContextValue}>
      <RouterProvider router={router} />
    </MovieContext.Provider>
  )
}
export { MovieContext }
export default App
