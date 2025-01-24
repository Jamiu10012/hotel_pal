import React from "react";

const FilterSortSection = ({
  filterOptions,
  sortOptions,
  onFilterChange,
  onSortChange,
}) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-200">
      {/* Filter Dropdown */}
      <div>
        <label htmlFor="filter" className="mr-2">
          Filter:
        </label>
        <select id="filter" onChange={(e) => onFilterChange(e.target.value)}>
          {filterOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Sort Dropdown */}
      <div>
        <label htmlFor="sort" className="mr-2">
          Sort By:
        </label>
        <select id="sort" onChange={(e) => onSortChange(e.target.value)}>
          {sortOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterSortSection;
