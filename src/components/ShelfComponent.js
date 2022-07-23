import propTypes from 'prop-types'
import React from 'react'
import Book from './common/Book'

const ShelfComponent = ({ books, title, shelfType, handleSelect }) => {

    const show = books.filter((books) => books.shelf === shelfType)

    return (
        <>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {show.map((books) =>
                            <li>
                                <Book books={books} handleSelect={handleSelect} />
                            </li>
                        )}
                    </ol>
                </div>
            </div>
        </>
    )
}
ShelfComponent.propTypes = {
    title: propTypes.string.isRequired,
    shelfType: propTypes.string.isRequired,
    books: propTypes.array.isRequired,
    handleSelect: propTypes.func.isRequired
}
export default ShelfComponent