#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

const characterId = '18';

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error}`);
  } else {
    const films = JSON.parse(body).results;
    const filmsWithWedge = films.filter(film => film.characters.includes(`https://swapi.dev/api/people/${characterId}/`));
    console.log(filmsWithWedge.length)
  }
});
