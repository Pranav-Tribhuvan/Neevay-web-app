import React, { useContext } from 'react';
import { FilterContext } from './FilterContext';

const SearchResultBadges = () => {
  const { filters, setFilters } = useContext(FilterContext);

  const getBadges = () => {
    const badges = [];
    if (filters.category) badges.push({ type: 'category', value: filters.category });
    if (filters.searchTerm) badges.push({ type: 'searchTerm', value: filters.searchTerm });
    filters.selectedCities.forEach(city => badges.push({ type: 'city', value: city }));
    if (filters.verifiedOnly) badges.push({ type: 'verified', value: 'Verified Vendor' });
    if (filters.laborStrength) badges.push({ type: 'laborStrength', value: filters.laborStrength });
    if (filters.businessAge) badges.push({ type: 'businessAge', value: filters.businessAge });
    return badges;
  };

  const handleRemove = (badge) => {
    const newFilters = { ...filters };
    switch (badge.type) {
      case 'category':
        newFilters.category = '';
        break;
      case 'searchTerm':
        newFilters.searchTerm = '';
        break;
      case 'city':
        newFilters.selectedCities = newFilters.selectedCities.filter(city => city !== badge.value);
        break;
      case 'verified':
        newFilters.verifiedOnly = false;
        break;
      case 'laborStrength':
        newFilters.laborStrength = '';
        break;
      case 'businessAge':
        newFilters.businessAge = '';
        break;
      default:
        break;
    }
    setFilters(newFilters);
  };

  const badges = getBadges();

  return (
    <div className="flex flex-wrap gap-2 mt-8 mb-4">
      {badges.map((badge, index) => (
        <span
          key={index}
          className="inline-flex items-center px-2 py-1 text-sm font-medium text-black bg-[#E0E0D3] rounded"
        >
          {badge.value}
          <button
            type="button"
            className="inline-flex items-center p-1 ml-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300"
            onClick={() => handleRemove(badge)}
            aria-label={`Remove ${badge.value}`}
          >
            <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Remove</span>
          </button>
        </span>
      ))}
    </div>
  );
};

export default SearchResultBadges;