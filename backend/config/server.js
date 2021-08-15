module.exports = ({ env }) => ({
  url: env("https://racism-report-server.herokuapp.com/"),
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "d1e75d8c4beba5d0861169155da51a0a"),
    },
  },
});
