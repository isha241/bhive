// import React from "react";
// import { Search } from "lucide-react";
// import { useSpacesStore } from "../../store/spacesStore";

// const SearchBar: React.FC = () => {
//   const { searchQuery, filterSpaces, clearFilters } = useSpacesStore();

//   return (
//     <div className="relative w-full sm:w-64">
//       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//         <Search className="h-5 w-5 text-gray-3" />
//       </div>
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={(e) => filterSpaces(e.target.value)}
//         className="block w-full pl-10 pr-3 py-2 border border-gray-4 rounded-md leading-5 bg-white placeholder-gray-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
//         placeholder="Search spaces..."
//       />
//       {searchQuery && (
//         <button
//           onClick={clearFilters}
//           className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-3 hover:text-gray-2"
//         >
//           ×
//         </button>
//       )}
//     </div>
//   );
// };

// export default SearchBar;
import React, { useEffect } from "react";
import { Search } from "lucide-react";
import { useSpacesStore } from "../../store/spacesStore";

const SearchBar: React.FC = () => {
  const { searchQuery, filterSpaces, clearFilters } = useSpacesStore();

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterSpaces(e.target.value); // Update search query and filter spaces
  };

  // Handle clear search button click
  const handleClearSearch = () => {
    clearFilters(); // Clear the search query and reset filtered spaces
  };

  return (
    <div className="relative w-full sm:w-64">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-3" />
      </div>

      {/* Search Input */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        className="block w-full pl-10 pr-3 py-2 border border-gray-4 rounded-md leading-5 bg-white placeholder-gray-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
        placeholder="Search spaces..."
      />

      {/* Clear Button */}
      {searchQuery && (
        <button
          onClick={handleClearSearch}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-3 hover:text-gray-2"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SearchBar;
