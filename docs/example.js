// const json2csv = require('zll-json2csv');
const json2csv = require('../index');

// Create a JSON array
const json = [
    {
        name: "John",
        age: 30,
        city: "New York"
    },
    {
        name: "Peter",
        age: 40,
        city: "Los Angeles"
    },
    {
        name: "Amy",
        age: 50,
        city: "Chicago"
    }
];

// Convert JSON array to CSV string
const csv = json2csv(json);

// Print CSV string
console.log(csv);