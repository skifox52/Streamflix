import React from "react"
import { Link } from "react-router-dom"

interface MovieCardProps {
  image: string
  title: string
  duration: string
}

export const MovieCard: React.FC<MovieCardProps> = ({
  image,
  title,
  duration,
}) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl flex z-0">
      <figure className="w-1/2">
        <img src={image} alt="Movie" className="object-cover" />
      </figure>
      <div className="card-body flex-1">
        <h2 className="card-title">{title}</h2>
        <p>{duration}</p>
        <div className="card-actions justify-end">
          <Link to={`/movie/${title}`} className="btn btn-primary">
            Watch
          </Link>
        </div>
      </div>
    </div>
  )
}
