import React, { useState } from 'react'
import Book from './common/Book'
import { search } from '../BooksAPI'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'


const SearchComponent = ({ handleSelect }) => {
  const [query, SetQuery] = useState('')
  const [results, SetResults] = useState([])

  const handleQuery = (query) => {
    SetQuery(query)
    search(query).then((result) => {
      SetResults(result)
    })
  }



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
          {results && results.length > 0 &&
            results.map((book) =>
              <li>
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
  handleSelect: propTypes.func.isRequired
}
export default SearchComponent