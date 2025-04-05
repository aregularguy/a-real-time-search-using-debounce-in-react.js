import React, {useEffect} from "react";
import './style.css';
import { fetchSearchResults } from './utils';
import SearchInput from "./components/SearchInput";
import ListItem from "./components/ListItem";

function App() {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);

  const fetchData = async () => {
    const res = await fetchSearchResults(query);
    setResults(res);
  };

 useEffect(() => {
    if (query.trim()) {
      fetchData();
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <>
    <div className="app-container">
      <h2 className="page-title">☕ Coffee Finder</h2>
      </div>
  
      <SearchInput
        value={query}
        onChangeText={(e) => setQuery(e.target.value)}
      />

      <div className="results-wrapper">
        {results.map((res, index) => (
          <ListItem
            key={index}
            title={res.title}
            imageURL={res.image || 'https://via.placeholder.com/100'}
            caption={res.description}
          />
        ))}
      </div>
    </>
  )
}

export default App;
