'use strict';
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://dev:dev@localhost:5432/blog-app';

exports.DATABASE = {
    client: 'pg',
    connection: DATABASE_URL,
    pool: {min: 0, max: 3},
    debug: true
};

exports.PORT = process.env.PORT || 8080;
