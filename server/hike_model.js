const Pool = require('pg').Pool
let pool = new Pool({
    database: 'hiking',
    user: 'postgres',
    port: 5432,
    password:'genm00',
    host: 'localhost'
});

// const Pool = require('pg').Pool
// let pool = new Pool({
//     database: 'studs',
//     user: 's265067',
//     port: 49647,
//     password:'rdi044',
//     host: 'localhost'
// });
module.exports = pool;