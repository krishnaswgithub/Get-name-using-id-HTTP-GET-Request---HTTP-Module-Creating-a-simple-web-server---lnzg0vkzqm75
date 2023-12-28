// const fs = require('fs');
// const express = require('express');
// const app = express();

// // Importing productNames from names.json file
// const productNames = JSON.parse(
//     fs.readFileSync(`${__dirname}/data/names.json`)
// );

// //Middlewares
// app.use(express.json())

// // GET endpoint for sending the products to client by id
// //Endpoint - /api/v1/names/:id


// module.exports = app;


const fs = require('fs');
const express = require('express');
const app = express();

// Importing productNames from names.json file
const productNames = JSON.parse(
    fs.readFileSync(`${__dirname}/data/names.json`)
);

// Middlewares
app.use(express.json());

// GET endpoint for sending the products to the client by id
// Endpoint - /api/v1/names/:id
app.get('/api/v1/names/:id', (req, res) => {
    // Retrieve the parameter 'id' from the request object
    const { id } = req.params;

    // Search for the productName in the array of names
    const productName = productNames.find(name => name.id === parseInt(id));

    if (productName) {
        // If an object with a particular id is found, return the object with a status code of 200
        res.status(200).json({
            status: 'success',
            message: 'Product name fetched successfully',
            data: {
                name: productName,
            },
        });
    } else {
        // If no object is found, return a JSON response with a status code of 404 and a message "Not found!"
        res.status(404).json({
            status: 'failure',
            message: 'Not found!',
        });
    }
});

module.exports = app;

