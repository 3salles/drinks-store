import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";
import reportWebVitals from "./reportWebVitals";

createServer({
  models: {
    drink: Model,
  },

  seeds(server){
    server.db.loadData({
      drinks: [
        {
          id: 1,
          name: 'Cerva',
          brand: 'BR',
          createdAt: new Date('2021-02-12 09:00:00')
        }, 
        {
          id: 2,
          name: 'Vinho',
          brand: 'FR',
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 3,
          name: 'Batida gelada',
          brand: 'VE',
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 4,
          name: 'Sake',
          brand: 'JP',
          createdAt: new Date('2021-02-12 09:00:00')
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/drinks', () => {
      return this.schema.all('drink')
    })

    this.post('/drinks', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('drink', data);
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
