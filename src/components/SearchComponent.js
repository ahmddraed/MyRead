import React, { useState } from 'react'
import Book from './common/Book'
import { search } from '../BooksAPI'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'


const SearchComponent = ({ books, handleSelect }) => {
  const [query, SetQuery] = useState('')
  const [results, SetResults] = useState([])

  const handleQuery = (query) => {
    SetQuery(query)
    search(query).then((result) => {
      SetResults(result)
    })
  }

  const ShowResults = results && results.length > 0 && results.map((result) => {
    books.map((book) => {
      if (book.id === result.id) {
        result.shelf = book.shelf
      }
      return book
    })
    return result
  })

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link
          className="close-search"
          to='/'
        >
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => handleQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {ShowResults && ShowResults.length > 0 &&
            ShowResults.map((book) =>
              <li key={book.id}>
                <Book books={book} handleSelect={handleSelect} />
              </li>
            )
          }
        </ol>
      </div>
    </div>
  )
}
SearchComponent.propTypes = {
  books: propTypes.array.isRequired,
  handleSelect: propTypes.func.isRequired
}
export default SearchComponent