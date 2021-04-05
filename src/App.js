import './App.css';
import logo from './StarWarsLogo.png';
import Search from './Search.js';
import {useEffect, useState} from "react";


export default function App() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page !== null) {
     fetch(`https://swapi.dev/api/people/?page=${page}`)
       .then(response => response.json())
       .then(data => {
          list.push(...data.results);
          setList(list);
          if (data.next !== null) {
            setPage(page + 1);
          } else {
            setPage(null);
          };
        })
    }
  }, [page]);

  return (
  <>
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="StarWarsLogo" />
        <h1 className="header">Characters</h1>
      </header>
      <Search inputList={list} />
    </div>
  </>
  );
}
