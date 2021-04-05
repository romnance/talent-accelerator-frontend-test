import React, {useEffect, useState} from "react";
import ItemList from "./ItemList.js";

export default function Search( {inputList} ) {
 	const [searchQuery, setSearchQuery] = useState("");
 	const [searchResults, setSearchResults] = useState([]);
 	
 	const handleSearchQueryChange = event => {
 		setSearchQuery(event.target.value);
 	}

 	useEffect(() => {
 		if (searchQuery) {
 			var results = inputList.filter(person =>
      			person.name.toLowerCase().includes(searchQuery.toLowerCase())
	    	);
 		} else {
 			var results = inputList;
 		}
	  setSearchResults(results);
  }, [searchQuery]);

	return (
	  <>
	  	<input 
	  		type="text" 
	  		placeholder="Search by name" 
	  		value={searchQuery} 
	  		onChange={handleSearchQueryChange} 
	  	/>
  	  <ul>
        <ItemList itemList = {searchResults} />
      </ul>
	  </>
	);
}
