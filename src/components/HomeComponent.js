import React from 'react'
import { Link } from 'react-router-dom'
import ShelfComponent from './ShelfComponent'
import propTypes from 'prop-types'


const HomeComponent = ({ books, handleSelect }) => {



    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <ShelfComponent books={books} title='Currently Reading' shelfType='currentlyReading' handleSelect={handleSelect} />
                <ShelfComponent books={books} title='Want to Read' shelfType='wantToRead' handleSelect={handleSelect} />
                <ShelfComponent books={books} title='Read' shelfType='read' handleSelect={handleSelect} />
            </div>
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