'use strict';

var logger = require('bunyan').createLogger({
    name: 'FullStackBDD',
    level: process.env.FULLSTACK_LOG_LEVEL || 'error',
    stream: process.stdout
});

module.exports = logger;