import "./App.css";
import HomeComponent from "./components/HomeComponent";
import SearchComponent from "./components/SearchComponent";
import { useState, useEffect } from 'react'
import * as BooksApi from './BooksAPI'
import { Routes, Route } from 'react-router-dom'

function App() {

  const [Books, setBook] = useState([]);


  const handleSelect = async (book, bookShelf) => {
    await BooksApi.update(book, bookShelf)
    getBooks();
  }
  const getBooks = async () => {
    const res = await BooksApi.getAll()
    setBook(res)
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (

    <div className="app">

      <Routes>
        <Route exat path='/' element={<HomeComponent books={Books} handleSelect={handleSelect} />} />

        <Route exat path='/search' element={<SearchComponent books={Books} handleSelect={handleSelect} />} />

      </Routes>
    </div>
  );
}

export default App;
