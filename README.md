# json2csv.js

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![GitHub file size in bytes](https://img.shields.io/github/size/ZhengLinLei/json2csv/src/json2csv.js)
![npm](https://img.shields.io/npm/dw/zll-json2csv)

## Installation

```bash
npm install zll-json2csv
npm i zll-json2csv
```

## Usage

```javascript
const json2csv = require('zll-json2csv');

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
```

## Output

```csv
name,age,city
John,30,New York
Peter,40,Los Angeles
Amy,50,Chicago
```
