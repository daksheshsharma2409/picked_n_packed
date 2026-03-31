const fetchUsingApi = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=0");
  const data = await response.json();
  return data;
};

export default fetchUsingApi;
