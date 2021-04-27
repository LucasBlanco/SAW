const dev = {
  backEnd: "https://jsonplaceholder.typicode.com/",
  production: false,
};

const prod = {
  backEnd: "https://jsonplaceholder.typicode.com/",
  production: true,
};

const environment = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default environment;
