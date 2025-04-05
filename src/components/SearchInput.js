import React, { useState, useEffect } from 'react';
import './SearchInput.css';
import ListItem from './ListItem';

const SearchInput = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Debounced API call when user types
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const debounce = setTimeout(() => {
      fetch(`https://api.sampleapis.com/coffee/hot`)
        .then((res) => res.json())
        .then((data) => {
          const filtered = data.filter(coffee =>
            coffee.title.toLowerCase().includes(query.toLowerCase())
          );
          setResults(filtered);
        })
        .catch((err) => console.error('Failed to fetch coffee data:', err));
    }, 400); // 400ms debounce

    return () => clearTimeout(debounce);
  }, [query]);

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search coffee by name"
      />
      <div className="results-list">
        {results.map((coffee) => (
          <ListItem
            key={coffee.id}
            title={coffee.title}
            caption={coffee.description}
            imageURL={coffee.image || 'https://via.placeholder.com/100'}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchInput;
