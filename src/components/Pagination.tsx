import React from "react"

interface PaginationProps {
  pages: number
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export const Pagination: React.FC<PaginationProps> = ({
  pages,
  currentPage,
  setCurrentPage,
}) => {
  let pagesElement = []
  for (let i = 0; i < pages; i++) {
    pagesElement.push(
      <button
        className={currentPage === i ? "btn btn-md btn-active" : "btn btn-md"}
        key={i}
        onClick={(e) => {
          setCurrentPage(parseInt(e.currentTarget.textContent as string) - 1)
        }}
      >
        {i + 1}
      </button>
    )
  }
  return <div className="btn-group mt-8">{pagesElement}</div>
}
