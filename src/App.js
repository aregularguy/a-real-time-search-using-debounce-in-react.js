import React from "react"
import './style.css'
import debounce from 'lodash.debounce';
import {fetchSearchResult, fetchSearchResults} from './utils'
import SearchInput from "./components/SearchInput";
import ListItem from "./components/ListItem";
function App() {
  const [query,setQuery] = React.useState('')
  const[results,setResults] = React.useState([])

  const fetchData = async () => {
    const res = await fetchSearchResults(query)
    console.log(res);
    setResults(res)
  }

  React.useEffect(() => {
    fetchData()
  },[query])

  return (
   
<div>
    <SearchInput value={query} onChangeText = { e  =>{
      setQuery(e.target.value)
    }} />
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
