# E-commerce
 * Design an API for an E-commerce platform admin to manage product inventory
 * Hosted on LocalServer app. Click [here](http://localhost:4003/products)

## Features:
  * Create Product 
  link : POST: `http://localhost:4003/products/create`
  json pass: {"name":"product_name", "quantity":123}
  
  * Get Product
  link: GET: `http://localhost:4003/products`

  * Remove Product
  link: DELETE: `http://localhost:4003/products/:id`

  * Update Product
  link: PUT: `http://localhost:4003/products/:id`
  json pass: {"name":"product_name", "quantity":123}

  
## Running on your local system:
 * run the command `npm install` in terminal to install all dependencies
 * run the command `node index` || `nodemon index.js` in terminal to start the server on port 4003
 * open up postman and type `http://localhost:4003/products` in URL and you're good to go

### Tech Used:

 * NodeJS
 * Express
 * MongoDB

### Libraries Used:

 * express
 * mongoose


