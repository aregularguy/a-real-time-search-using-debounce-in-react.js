import React from "react"
import './style.css'
import debounce from 'lodash.debounce';
import {fetchSearchResult, fetchSearchResults} from './utils'
import SearchInput from "./components/SearchInput";
import ListItem from "./components/ListItem";
const fetchData = async (query, cb) => {
  const res = await fetchSearchResults(query);
  cb(res);
 };
 const debouncedFetchData = debounce((query, cb) => {
  fetchData(query, cb);
 }, 500);
function App() {
  const [query,setQuery] = React.useState('')
  const[results,setResults] = React.useState([])

 

  React.useEffect(() => {
    debouncedFetchData(query, res => {
      setResults(res)
    })
    
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
