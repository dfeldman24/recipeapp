const express = require('express');
const app = express();
const path = require('path');
const assets_path = path.join(__dirname, '../assets');
const recipes = require('../db/mock/recipes.json');

app.use('/public', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(assets_path,'index.html'))
})

app.get('/recipes', (req, res) => {
  console.log('kjdaklsjdklajsdkljalksdjklajdkl')
  return res.status(200).send(JSON.stringify({
    "data": [
      {
        "id": 0,
        "name": "Italian Dressing",
        "ingredients": [
          {
            "name": "Olive Oil",
            "amount": 9,
            "units": "Tbsp"
          },
          {
            "name": "Balsamic",
            "amount": 5,
            "units": "Tbsp"
          },
          {
            "name": "Black pepper",
            "amount": 1,
            "units": "Tbsp"
          },
          {
            "name": "Shallot",
            "amount": 1,
            "units": null
          }
        ]
      },
      {
        "id": 0,
        "name": "Italian Dressing",
        "ingredients": [
          {
            "name": "Olive Oil",
            "amount": 9,
            "units": "Tbsp"
          },
          {
            "name": "Balsamic",
            "amount": 5,
            "units": "Tbsp"
          },
          {
            "name": "Black pepper",
            "amount": 1,
            "units": "Tbsp"
          },
          {
            "name": "Shallot",
            "amount": 1,
            "units": null
          }
        ]
      }
    ]
  }));
})

app.listen(3000);