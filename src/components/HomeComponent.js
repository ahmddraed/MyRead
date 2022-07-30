import React from 'react'
import { Link } from 'react-router-dom'
import ShelfComponent from './ShelfComponent'
import propTypes from 'prop-types'


const HomeComponent = ({ books, handleSelect }) => {
    const ShelfType = [
        { title: 'Currently Reading', type: 'currentlyReading' },
        { title: 'Want to Read', type: 'wantToRead' },
        { title: 'Read', type: 'read' }
      ]


    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            {ShelfType.map((shelf) =>
            <div className="list-books-content" key={shelf.type}>
                <ShelfComponent books={books} title={shelf.title} shelfType={shelf.type} handleSelect={handleSelect} />
            </div>
            )}
            <div className="open-search">
                <Link to='/search'>Add a book</Link>
            </div>
        </div>
    )
}

HomeComponent.propTypes = {
    books: propTypes.array.isRequired,
    handleSelect: propTypes.func.isRequired
}
export default HomeComponent