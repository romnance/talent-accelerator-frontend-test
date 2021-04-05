import React, {useEffect, useState} from "react";

export default function Item( {item} ) {
	const [showDetails, setShowDetails] = useState(false);

	function handleNameClick() {
		setShowDetails(prev => !prev);
	}

	return (
		<li className="Character" key={item.name} onClick={() => handleNameClick()}>
      {item.name}
      {showDetails ? 
        <ul>
          <li className="Details">height: {item.height}</li>
          <li className="Details">mass: {item.mass}</li>
        </ul> : null}
    </li>
	)
}