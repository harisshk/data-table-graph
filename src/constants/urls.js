const prod = {
  url: {
    BASE_URL: "https://dummyjson.com/products",
  },
};
const dev = {
  url: {
    BASE_URL: "https://dummyjson.com/products",
  },
};
const config = process.env.NODE_ENV === "development" ? dev : prod;

module.exports = {
  url: config?.url?.BASE_URL,
};
