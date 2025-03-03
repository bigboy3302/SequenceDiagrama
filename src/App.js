import './App.css';
import React from 'react';
import BlogList from './components/BlogList';

const App = () => {
  return (
    <main>
      <header>
        <h1>My Blog</h1>
      </header>
      <BlogList />
    </main>
  );
};

export default App;
