import React, { useState, useContext } from 'react';
import ReactSlider from 'react-slider';
import { FilterContext } from './FilterContext'; // Import the FilterContext

const allCities = [
    'Pune', 'Mumbai', 'Delhi', 'Bengaluru', 'Chennai', 'Kolkata', 'Hyderabad', 'Ahmedabad',
    'Nashik', 'Ahmednagar', 'Nagpur'
];

const SearchResultFilters = () => {
    const { filters, setFilters } = useContext(FilterContext); // Use the context to get and set filters

    const [services, setServices] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [turnover, setTurnover] = useState(false);
    const [labour, setLabour] = useState(false);
    const [businessAge, setBusinessAge] = useState(false);
    const [projectOpen, setProjectOpen] = useState(false);

    const handleTurnoverDropdown = () => {
        setTurnover(!turnover);
    };

    const handleSliderChange = (values) => {
        setFilters(prev => ({ ...prev, priceRange: values }));
    };

    const handleChangeProjects = (event) => {
        const projectValue = parseInt(event.target.value);
        setFilters(prev => ({ ...prev, minProjects: projectValue }));
    };

    const filteredCities = allCities.filter(city =>
        city.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCheckboxChange = (city) => {
        setFilters(prev => ({
            ...prev,
            selectedCities: prev.selectedCities.includes(city)
                ? prev.selectedCities.filter(c => c !== city)
                : [...prev.selectedCities, city]
        }));
    };

    const citiesToShow = showAll ? filteredCities : filteredCities.slice(0, 4);

    const handleServiceDropdown = () => {
        setServices(!services);
    };

    const handleLocationDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLabourDropdown = () => {
        setLabour(!labour);
    };

    const handleBusinessAgeDropdown = () => {
        setBusinessAge(!businessAge);
    };

    const handleProjectsDropdown = () => {
        setProjectOpen(!projectOpen);
    };

    const handleVerifiedChange = (event) => {
        setFilters(prev => ({ ...prev, verifiedOnly: event.target.checked }));
    };

    const handleLaborStrengthChange = (value) => {
        setFilters(prev => ({ ...prev, laborStrength: value }));
    };

    const handleBusinessAgeChange = (value) => {
        setFilters(prev => ({ ...prev, businessAge: value }));
    };

    return (
        <div className='w-[340px] h-[90vh] overflow-hidden'>
            <div className='flex flex-col sticky px-8 pt-[24px] h-full'
                style={{ overflowY: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                <div style={{ overflowY: 'scroll', msOverflowStyle: 'none', scrollbarWidth: 'none' }} className='space-y-8'>
                    <h3 className='text-2xl font-bold'>Filters</h3>

                    {/* verified vendors only */}
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/blue_tick.svg" alt="tick" />
                            <p className="ms-2 text-sm w-fit font-medium text-black">Verified Vendors Only</p>
                        </div>
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={filters.verifiedOnly}
                                onChange={handleVerifiedChange}
                            />
                            <div className="mr-[2px] relative w-11 h-6 bg-[#ACACAC] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>

                    {/* services */}
                    <div>
                        <button onClick={handleServiceDropdown} className='w-full flex items-center justify-between text-[#2F2F1C] text-base font-semibold'>
                            Services
                            <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/dropdown_arrow.svg" alt="v"
                                className={`transition-transform duration-300 ${services ? 'rotate-180' : 'rotate-0'}`} />
                        </button>

                        {services && (
                            <div className='border border-[#979797] bg-white flex justify-between items-center w-[276px] h-[44px] mt-4'>
                                <input type="text" placeholder='Search' className='w-full border-none placeholder:text-[#696969] placeholder:text-sm focus:ring-0 p-2' />
                                <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/N2_searchbar_magnifying_glass.svg" alt="Q" className='h-4 w-4 mx-2' />
                            </div>
                        )}
                    </div>

                    {/* locations */}
                    <div>
                        <button onClick={handleLocationDropdown} className='w-full flex items-center justify-between text-base text-[#2F2F1C] font-semibold'>
                            Locations
                            <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/dropdown_arrow.svg" alt="v"
                                className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                        </button>

                        {isDropdownOpen && (
                            <div className=' '>
                                <div className='mt-4 border border-[#979797] bg-white flex justify-between items-center h-[44px]'>
                                    <input
                                        type="text"
                                        placeholder='Search'
                                        className='focus:ring-0 border-none p-2 placeholder:text-[#696969] placeholder:text-sm w-full'
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/N2_searchbar_magnifying_glass.svg" alt="Q" className='h-4 w-4 mx-2' />
                                </div>

                                <div style={{ maxHeight: '200px', overflowY: 'scroll', msOverflowStyle: 'none', scrollbarWidth: 'none' }} className='p-2'>
                                    {citiesToShow.map(city => (
                                        <div className='flex items-center mb-2' key={city}>
                                            <input
                                                type="checkbox"
                                                checked={filters.selectedCities.includes(city)}
                                                onChange={() => handleCheckboxChange(city)}
                                                className='w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded-sm focus:ring-1 focus:ring-blue-500'
                                            />
                                            <label className='ms-2 text-sm font-medium text-gray-900'>
                                                {city}
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    className='text-blue-600 text-left text-sm pl-2'
                                    onClick={() => setShowAll(!showAll)}
                                >
                                    {showAll ? 'View Less' : 'View All...'}
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Turnover */}
                    <div>
                        <button
                            onClick={handleTurnoverDropdown}
                            className='w-full flex items-center justify-between text-base text-[#2F2F1C] font-semibold'
                        >
                            Turnover
                            <img
                                src="https://storagereponeevaydevcdn.blob.core.windows.net/business/dropdown_arrow.svg"
                                alt="v"
                            />
                        </button>
                        {turnover && (
                            <div>
                                <ReactSlider
                                    className="w-full h-6 mt-4 mb-8 flex items-center justify-center"
                                    thumbClassName="h-6 w-6 bg-white rounded-full cursor-pointer flex items-center justify-center border border-gray-300"
                                    trackClassName="h-[2px] bg-[#AEAEAE]"
                                    min={0}
                                    max={100}
                                    step={1}
                                    value={filters.priceRange}
                                    onChange={handleSliderChange}
                                    renderThumb={(props, state) => (
                                        <div
                                            {...props}
                                            className="h-6 w-6 bg-white rounded-full cursor-pointer flex items-center justify-center border border-gray-300"
                                        >
                                            <div className="absolute bottom-[-25px] px-2 py-1 rounded text-xs  ">
                                                {state.valueNow}
                                            </div>
                                        </div>
                                    )}
                                />
                                <div className="flex justify-between items-center text-sm text-gray-600">
                                    <div className="flex flex-col justify-center items-center py-1 px-4 border border-gray-400">
                                        <span className='text-sm'>Minimum</span>
                                        <div className='text-base font-bold text-[#464646]'>
                                            ₹ {filters.priceRange[0]} Lakh
                                        </div>
                                    </div>
                                    <div className='w-4 h-[1px] bg-gray-400'></div>
                                    <div className="flex flex-col items-center py-1 px-4 border border-gray-400">
                                        <span className='text-sm'>Maximum</span>
                                        <div className='text-base font-bold text-[#464646]'>
                                            ₹ {filters.priceRange[1]} Lakh
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>



                    {/* labour strength */}
                    <div>
                        <button
                            onClick={handleLabourDropdown}
                            className="w-full flex items-center justify-between text-[#2F2F1C] text-base font-semibold"
                        >
                            Labour Strength
                            <img
                                src="https://storagereponeevaydevcdn.blob.core.windows.net/business/dropdown_arrow.svg"
                                alt="Dropdown"
                                className={`transition-transform duration-300 ${labour ? 'rotate-180' : 'rotate-0'}`}
                            />
                        </button>

                        {labour && (
                            <div className="flex flex-col mt-2 p-2 max-h-60 overflow-y-auto bg-gray-100">
                                {['0 - 20', '20 - 40', '40 - 60', '60 - 80', '80 - 100', '100+ Labourers'].map((range, index) => (
                                    <div className="flex items-center mb-2" key={index}>
                                        <input
                                            id={`labour-${index}`}
                                            type="radio"
                                            value={range}
                                            name="labour-strength"
                                            checked={filters.laborStrength === range}
                                            onChange={() => handleLaborStrengthChange(range)}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-1"
                                        />
                                        <label htmlFor={`labour-${index}`} className="ms-2 text-sm font-medium text-gray-900">
                                            {range}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* business age */}
                    <div>
                        <button onClick={handleBusinessAgeDropdown} className='w-full flex items-center justify-between text-base text-[#2F2F1C] font-semibold'>
                            Business Age
                            <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/dropdown_arrow.svg" alt="v"
                                className={`transition-transform duration-300 ${businessAge ? 'rotate-180' : 'rotate-0'}`} />
                        </button>

                        {businessAge && (
                            <div className="flex flex-col mt-2 p-2">
                                {['0 - 20 Years', '20 - 40 Years', '40+ Years'].map((range, index) => (
                                    <div className="flex items-center mb-2" key={index}>
                                        <input
                                            id={`business-age-${index}`}
                                            type="radio"
                                            value={range}
                                            name="business-age"
                                            checked={filters.businessAge === range}
                                            onChange={() => handleBusinessAgeChange(range)}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-1"
                                        />
                                        <label htmlFor={`business-age-${index}`} className="ms-2 text-sm font-medium text-gray-900">
                                            {range}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* min. projects completed */}
                    <div>
                        <button onClick={handleProjectsDropdown} className='w-full flex items-center justify-between text-base text-[#2F2F1C] font-semibold'>
                            Min. Projects Completed
                            <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/dropdown_arrow.svg" alt="v"
                                className={`transition-transform duration-300 ${projectOpen ? 'rotate-180' : 'rotate-0'}`} />
                        </button>
                        {projectOpen && (
                            <div className='mt-4'>
                                <input
                                    id="projects"
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="1"
                                    value={filters.minProjects}
                                    onChange={handleChangeProjects}
                                    style={{
                                        background: `linear-gradient(to right, #000 ${((filters.minProjects - 0) / (100 - 0)) * 100}%, #ddd ${((filters.minProjects - 0) / (100 - 0)) * 100}%)`,
                                        accentColor: '#202020', // Color for the pointer
                                    }}
                                    className="w-full h-[2px] bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                />
                                <div className="flex justify-between text-sm text-gray-600 mt-2">
                                    <span>0</span>
                                    <span>100+</span>
                                </div>
                                <div className="text-center mt-[-18px] text-sm text-gray-600">
                                    {filters.minProjects}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResultFilters;