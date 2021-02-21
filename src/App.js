import React from 'react';
import BookListProvider from './contexts/BookList';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  return (
    <div className="App">
      <BookListProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookListProvider>
    </div>
  );
}

export default App;
