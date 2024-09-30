import React, { useContext } from 'react';
import { FilterContext } from './FilterContext';
import SearchResultBadges from './SearchResultBadges';
import ContactInfoPopup from './ContactInfoPopup';
import BusinessCard from './BusinessCard';
import SearchResultPagination from './SearchResultPagination';

const SearchResultCards = () => {
  const { currentItems, currentPage, totalPages, setCurrentPage } = useContext(FilterContext);
  const [selectedBusiness, setSelectedBusiness] = React.useState(null);

  const handleViewContact = (business) => {
    setSelectedBusiness(business);
  };

  const handleClosePopup = () => {
    setSelectedBusiness(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <SearchResultBadges />
      <div className="min-h-screen flex flex-col items-center pr-8">
        <div className="w-full max-w-6xl">
          {currentItems.map((business) => (
            <BusinessCard key={business.vendorId} business={business} onViewContact={handleViewContact} />
          ))}
        </div>
        <SearchResultPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      {selectedBusiness && (
        <ContactInfoPopup business={selectedBusiness} onClose={handleClosePopup} />
      )}
    </>
  );
};

export default SearchResultCards;