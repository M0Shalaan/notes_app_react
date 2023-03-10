// /* eslint-disable no-lone-blocks */
// import React from "react";
// import { MdSearch } from "react-icons/md";

// {
//   /*this is our search component
//   here am using the handleSearchNote as props and we are going to use this
//   as our onClick event function for searching (this actual function has been defined in App.js)*/
// }
// function Search({ handleSearch }) {
//   return (
//     <div className="search">
//       {/*this is our search icon within our search bar and I have fixed it's size to 1.3em*/}
//       <MdSearch className="search-icon" size="1.5rem" />
//       {/*this is the input tag for our search and here , I have used some onClick events for searching*/}
//       <input
//         size="150"
//         type="text"
//         placeholder="Search for your notes..."
//         onChange={(event) => handleSearch(event.target.value)}
//       />
//     </div>
//   );
// }

// export default Search;

import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.7em" />
      <input
        size="150"
        className="search"
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="Type to search..."
      />
    </div>
  );
};

export default Search;
