import React, {useState, useEffect} from "react";

 function GetNames() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [displayDetails, setDisplayDetails] = useState([]);

  useEffect(() => {
    if (page !== null) {
     fetch(`https://swapi.dev/api/people/?page=${page}`)
       .then(response => response.json())
       .then(data => {
          list.push(...data.results);
          setList(list);
          for (var i = 0; i < data.results.length; i++) {
            displayDetails.push(false);
          }
          setDisplayDetails(displayDetails);
          if (data.next !== null) {
            setPage(page + 1);
          } else {
            setPage(null);
          };
        })
    }
  }, [page])

  function handleNameClick(i) {
    setDisplayDetails(state => {
      const newState = state.map((item, j) => {
        if (j === i) {
          return !item;
        } else {
          return item;
        }
      });
      return newState;
    });
  }


  return (
      <ul>
        {list.map( (elem, index) => 
          <li key={elem.name} onClick={() => handleNameClick(index)}>
            {elem.name}
            {displayDetails[index] ? <ul><li>height: {elem.height}</li></ul> : null}
          </li>
        )}
      </ul>
    )

} 

export default GetNames;