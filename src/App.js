import React from "react"
import './style.css'
import debounce from 'lodash.debounce';
import {fetchSearchResult, fetchSearchResults} from './utils'
import SearchInput from "./components/SearchInput";
import ListItem from "./components/ListItem";
function App() {
  const [query, setQuery] = React.useState('')
  const [results, setResults] = React.useState([])
  const [debouncedQuery, setDebouncedQuery] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  // Create a debounced function that updates debouncedQuery after 2 seconds of inactivity
  const debouncedSetQuery = React.useCallback(
    debounce(value => {
      setDebouncedQuery(value);
    }, 2000),
    []
  );

  // Handle input change
  const handleInputChange = e => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 0) {
      setIsLoading(true); // Set loading when user is typing and has entered something
    }
    debouncedSetQuery(value);
  };

  const fetchData = async () => {
    try {
      const res = await fetchSearchResults(debouncedQuery)
      setResults(res)
    } finally {
      setIsLoading(false) // Clear loading state after API call completes
    }
  }

  // Only fetch when debouncedQuery changes, not on every keystroke
  React.useEffect(() => {
    if (debouncedQuery.length > 0) {
      fetchData()
    } else {
      setResults([])
      setIsLoading(false)
    }
  }, [debouncedQuery])

  return (
   
<div>
    <h1 className="app-header">☕ Coffee Explorer</h1>
    <SearchInput value={query} onChangeText={handleInputChange} />
    
    {isLoading && (
      <div className="loading-indicator">
        <p>Searching for coffee... ☕</p>
      </div>
    )}
    
    {!isLoading && results.length === 0 && debouncedQuery !== '' && (
      <div className="no-results">
        <p>No coffee products found matching your search.</p>
      </div>
    )}
    
    {results.map((res,index) => (
      <div key={index} >
      <ListItem title={res.name}
      imageUrl={res.imageUrl}
      caption={res.tagline}
      />
      </div>
    ))}
    </div>
  );
}

export default App;
