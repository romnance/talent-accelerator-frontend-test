import React from "react";
import Item from "./Item.js";

export default function ItemList( {itemList} ) {
	return (
		<ul>
			{itemList.map( (item) => <Item item={item} />)}
		</ul>
	)
}