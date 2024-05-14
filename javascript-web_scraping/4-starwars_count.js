#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error}`);
  } else {
    const films = JSON.parse(body);
    const filmsWithWedge = films.results.filter(film => film.characters.some(character => character.includes('18'))
    );
    console.log(filmsWithWedge.length);
  }
});
