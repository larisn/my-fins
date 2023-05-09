const {send} = require("micro");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

server.use(middlewares);
server.use("/api", router);

module.exports = (req, res) => {
  if (req.url.startsWith("/api")) {
    return server(req, res);
  }
  return send(res, 404, "Not found");
};
