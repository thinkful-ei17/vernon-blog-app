'use strict';
const DATABASE_URL = process.env.DATABASE_URL ||
    // 'postgres://dev:dev@localhost:5432/blog-app';
'postgres://mlamkiai:e16rWs2CisO0Othac7xm9WSarLQAr5DR@baasu.db.elephantsql.com:5432/mlamkiai';
exports.DATABASE = {
    client: 'pg',
    connection: DATABASE_URL,
    pool: {min: 0, max: 3},
    debug: true
};

exports.PORT = process.env.PORT || 8080;
