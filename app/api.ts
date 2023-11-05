const env = process.env.NODE_ENV;

export const getCoreApiUrl = () => {
  switch (env) {
    case "development":
      return "https://localhost:7238";
    case "production":
      return "http://reportify-core-svc:8080";
    default:
      return "";
  }
};
