import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const jsonServer = require("json-server")
const server = jsonServer.create()
const router = jsonServer.router("db.json")
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 5000

server.use(middlewares)
server.use(router)
server.listen(port)

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
