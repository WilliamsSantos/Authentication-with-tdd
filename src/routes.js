const routes = require('express').Router();
const { User } = require('./app/models');

User.create({
    name: "Williams",
    email: "williams@email.com",
    password_hash: "123456432323344"
});

module.exports = routes;