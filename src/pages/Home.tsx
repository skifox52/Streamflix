import React, { useState, useEffect } from "react"
// import movies from "../data/movies.json"
import { Pagination } from "../components/Pagination"
import { MovieCard } from "../components/MovieCard"
import { useContext } from "react"
import { ContextValueInterface, MovieContext } from "../App"

interface HomeProps {}
export const Home: React.FC<HomeProps> = ({}) => {
  const { movies } = useContext<ContextValueInterface>(MovieContext)
  const pageNumber = movies.length / 8
  const [currentPage, setCurrentPage] = useState(0)
  useEffect(() => {
    setCurrentContent((prev) => ({
      ...prev,
      content: movies.slice(currentPage * 8, (currentPage + 1) * 8),
    }))
  }, [currentPage, movies])
  const [currentContent, setCurrentContent] = useState({
    currentPage,
    content: movies.slice(currentPage * 8, (currentPage + 1) * 8),
  })
  return (
    <div className="flex flex-col justify-between items-center h-full pt-16">
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 2xl:grid-cols-4">
        {currentContent.content.map((movie, indx) => (
          <MovieCard
            title={movie.Title}
            image={movie.Poster}
            duration={movie.Runtime}
            key={indx}
          />
        ))}
      </div>
      <Pagination
        pages={pageNumber}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}
