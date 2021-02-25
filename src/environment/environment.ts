const dev = {
  backEnd: "https://jsonplaceholder.typicode.com/",
  production: false,
};

const prod = {
  backEnd: "https://jsonplaceholder.typicode.com/",
  production: true,
};

const environment = process.env.STAGE === "prod" ? prod : dev;

export default environment;
