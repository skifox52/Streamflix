import React from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import data from "../data/movies.json"

interface DetailMovieProps {}

export const DetailMovie: React.FC<DetailMovieProps> = ({}) => {
  interface CurrentMovieInterface {
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
  let param = useParams()
  let currentMovie: CurrentMovieInterface[] = data.filter(
    (movie) => movie.Title === param.movie
  )
  let details = []
  for (let element in currentMovie[0]) {
    if (
      element === "Title" ||
      element == "Video" ||
      element == "Images" ||
      element === "Poster"
    ) {
      continue
    }
    details.push(
      <div className="flex flex-col border-b border-t border-zinc-600 bg-opacity-20 px-8 py-4 borde ">
        <h2 className="text-white text-xl tracking-wide font-extralight">
          {element}
        </h2>
        <p className="py-2 font-extralight">{currentMovie[0][element]}</p>
      </div>
    )
  }
  return (
    <div className="flex flex-col items-center px-4 xl:px-16">
      <Link
        to="/"
        className="btn btn-active btn-primary fixed top-32 right-6 z-50"
      >
        Back to Home page
      </Link>
      <div className="carousel w-screen max-h-[70vh]">
        {currentMovie[0].Images.map((img, i) => (
          <div id={`slide${i + 1}`} className="carousel-item relative w-full">
            <img src={img} className="w-full object-cover bg-center " />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`#slide${i}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#slide${i + 2}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
      <iframe
        className="w-full xl:w-3/5 aspect-video my-8"
        src={currentMovie[0].Video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className=" py-4 w-full">{details}</div>
    </div>
  )
}
