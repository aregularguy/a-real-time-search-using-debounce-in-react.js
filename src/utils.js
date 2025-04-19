export const BASE_URL = 'https://api.sampleapis.com/coffee';
export const fetchSearchResults = async query => {
  if (query && query.length > 0) {
    const parsedQuery = query.replaceAll(' ', '+');
    // Using the coffee API's hot coffee endpoint as an example
    // We'll retrieve all coffee products and filter client-side since this demo API doesn't have search params
    // Base Url for Public Api
    const url = `${BASE_URL}/hot`;
    const res = await fetch(url);
    const data = await res.json();
    // Client-side filtering based on the query
    const filteredResults = data.filter(coffee => 
      coffee.title.toLowerCase().includes(query.toLowerCase())
    );
    // Map the coffee data structure to match what the app expects
    return filteredResults.map(coffee => ({
      name: coffee.title,
      imageUrl: coffee.image,
      tagline: coffee.description || 'Coffee product'
    }));
  } else {
    return [];
  }
};
