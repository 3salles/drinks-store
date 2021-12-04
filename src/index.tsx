import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer } from "miragejs";
import reportWebVitals from "./reportWebVitals";

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/drinks', () => {
      return [
        {
          id: 1,
          nameDrink: 'Cerva BR',
          brand: 'BR',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
