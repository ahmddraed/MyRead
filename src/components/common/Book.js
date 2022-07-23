import propTypes from 'prop-types'
import React from 'react'
import ShelfSelector from './ShelfSelector'

const Book = ({ books, handleSelect }) => {


  return (
    <>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${books.imageLinks ? books.imageLinks.smallThumbnail : 'empty'})`
            }}
          ></div>
          <ShelfSelector books={books} handleSelect={handleSelect} />
        </div>
        <div className="book-title">{books.title}</div>
        <div className="book-authors">{books.authors}</div>
      </div>

    </>

  )
}
Book.prototype = {
  books: propTypes.object.isRequired,
  handleSelect: propTypes.func.isRequired
}
export default Book