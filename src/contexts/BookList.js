import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookListProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : []
  });
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
    console.log(localStorage, books)
  }, [books])
  return (
    <BookContext.Provider value={{books, dispatch}} >
      {props.children}
    </BookContext.Provider>
  )
}

export default BookListProvider;