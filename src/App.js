import React from 'react';
import FilterProvider from './components/FilterContext';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div>
      <FilterProvider>
      <SearchResults />
      </FilterProvider>
    </div>
  );
}

export default App;
