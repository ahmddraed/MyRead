import React from 'react'
import propTypes from 'prop-types'
const ShelfSelector = ({ books, handleSelect }) => {

    const handleOnSelect = (e) => {
        const value = e.target.value
        handleSelect(books, value)
    }
    return (
        <div className="book-shelf-changer">
            <select value={books.shelf ? books.shelf : 'none'} onChange={handleOnSelect}>
                <option value="none" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}
ShelfSelector.prototype = {
    books: propTypes.object.isRequired,
    handleSelect: propTypes.func.isRequired
}
export default ShelfSelector