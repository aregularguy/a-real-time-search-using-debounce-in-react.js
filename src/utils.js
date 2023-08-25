export const BASE_URL = 'https://api.punkapi.com/v2';
export const fetchSearchResults = async query => {
  if (query && query.length > 0) {
    const parsedQuery = query.replaceAll(' ', '+');
    const url = `${BASE_URL}/beers?beer_name=${parsedQuery}`;
    const res = await fetch(url);
    const resJson = res.json();
    return resJson;
  } else {
    return [];
  }
};
