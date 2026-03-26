const api = "https://dummyjson.com/products?limit=0";
const getData = async (api) => {
  if (localStorage.getItem("userData") != null) {
    console.log("Fetching Stored Data");
  } else {
    console.log("Fetching New Data");
    const response = await fetch(api);
    const data = await response.json();
    const userJSONString = await JSON.stringify(data.products);
    localStorage.setItem("userData", userJSONString);
  }
};

getData(api);
