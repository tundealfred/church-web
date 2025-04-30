module.exports = [
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      enable: true,
      origin: ["http://localhost:3000', 'http://127.0.0.1:3000"], // your frontend URL
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      headers: "*",
    },
  },
  "strapi::security",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
