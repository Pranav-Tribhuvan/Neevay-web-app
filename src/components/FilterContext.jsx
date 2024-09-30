import React, { createContext, useState, useEffect } from 'react';
import vendorData from '../vendorData.json'; // Adjust path as necessary

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        category: '',
        priceRange: [0, 100],
        searchTerm: '',
        selectedCities: [],
        verifiedOnly: false,
        laborStrength: '',
        businessAge: '',
        minProjects: 0,
    });
    const [filteredData, setFilteredData] = useState(vendorData); // Initialize with all vendor data
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        const applyFilters = () => {
            const filtered = vendorData.filter(item => {
                const isInCategory = filters.category ? item.vendorType === filters.category : true;
                const matchesSearchTerm = item.vendorName.toLowerCase().includes((filters.searchTerm || '').toLowerCase());
                const isInCity = filters.selectedCities.length > 0
                    ? filters.selectedCities.some(city => item.serviceLocations.Selectedcities.includes(city))
                    : true;
                const matchesTurnover = parseInt(item.turnover.replace(/\D/g, '')) >= filters.priceRange[0] && parseInt(item.turnover.replace(/\D/g, '')) <= filters.priceRange[1];
                const isVerified = filters.verifiedOnly ? item.verifiedStatus : true;
                const matchesLaborStrength = filters.laborStrength ? item.laborStrength === filters.laborStrength : true;
                const matchesBusinessAge = filters.businessAge ? item.businessAge === filters.businessAge : true;
                const matchesMinProjects = item.projectsCompleted >= filters.minProjects;

                return isInCategory && matchesSearchTerm && isInCity && matchesTurnover && isVerified && matchesLaborStrength && matchesBusinessAge && matchesMinProjects;
            });
            
            setFilteredData(filtered);
            setCurrentPage(1); // Reset to the first page when filters change
        };

        applyFilters();
    }, [filters]);

    // Calculate total pages
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    // Get current items
    const currentItems = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const contextValue = {
        filters,
        setFilters,
        filteredData,
        currentItems,
        currentPage,
        totalPages,
        setCurrentPage
    };

    return (
        <FilterContext.Provider value={contextValue}>
            {children}
        </FilterContext.Provider>
    );
};

export default FilterProvider;