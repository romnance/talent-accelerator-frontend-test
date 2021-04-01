import React, {useState, useEffect} from "react";

 function GetNames() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page !== null) {
     fetch(`https://swapi.dev/api/people/?page=${page}`)
       .then(response => response.json())
       .then(data => {
          console.log(data);
          list.push(...data.results);
          setList(list);
          if (data.next !== null) {
            setPage(page + 1);
          } else {
            setPage(null);
          };
        })
    }
  }, [page])

  function handleNameClick(elem) {

  }

  return (
      <ul>
        {list.map(elem => 
          <li key={elem.name} onClick={() => handleNameClick(elem)}>
            {elem.name}
            <ul>
              <li>height: {elem.height}</li>
            </ul>
          </li>)}
      </ul>
    )

} 

export default GetNames;