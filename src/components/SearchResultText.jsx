import React, { useContext } from 'react';
import { FilterContext } from './FilterContext';

const SearchResultText = () => {
  const context = useContext(FilterContext);

  // Check if context is available
  if (!context) {
    console.error('FilterContext not found. Make sure SearchResultText is wrapped in FilterProvider.');
    return null;
  }

  const { filteredData, currentPage, filters } = context;
  const itemsPerPage = 5; 

  // Check if filteredData is available
  if (!filteredData) {
    console.error('filteredData is undefined. Check FilterProvider implementation.');
    return null;
  }

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, filteredData.length);
  const totalResults = filteredData.length;

  const searchTerm = filters.searchTerm || filters.category || 'All vendors';

  return (
    <div>
      <p className='bg-[#E6E6E5] text-base px-8 py-4 mt-[92px]'>
        Showing {startIndex}-{endIndex} of {totalResults} results for <span className='font-bold'>"{searchTerm}"</span>
      </p>
    </div>
  );
};

export default SearchResultText;