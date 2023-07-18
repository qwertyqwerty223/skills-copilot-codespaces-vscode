// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

// Create event bus
const events = [];

// Define endpoints
app.post('/events', (req, res) => {
  const event = req.body;

  events.push(event);

  // Send event to posts
  axios.post('http://posts-clusterip-srv:4000/events', event);
  // Send event to comments
  axios.post('http://comments-srv:4001/events', event);
  // Send event to query
  axios.post('http://query-srv:4002/events', event);
  // Send event to moderation
    axios.post('http://moderation-srv:4003/events', event);
});
