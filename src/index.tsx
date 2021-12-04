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
          name: 'Cerva',
          brand: 'BR',
          createdAt: new Date()
        }, 
        {
          id: 2,
          name: 'Vinho',
          brand: 'FR',
          createdAt: new Date()
        },
        {
          id: 3,
          name: 'Batida gelada',
          brand: 'VE',
          createdAt: new Date()
        },
        {
          id: 4,
          name: 'Sake',
          brand: 'JP',
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
