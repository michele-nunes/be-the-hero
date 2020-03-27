const express = require('express');

const OngController = require('./Controllers/OngController');
const IncidentCrontroller = require('./Controllers/IncidentCrontoller');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');



const routes = express.Router();

routes.post('/sessions', SessionController.create);


routes.get('/ongs',OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentCrontroller.create);
routes.get('/incidents', IncidentCrontroller.index);
routes.delete('/incidents/:id',IncidentCrontroller.delete );
module.exports = routes;