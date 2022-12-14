const pg = require('pg');
const dotenv = require('dotenv');
dotenv.config();


const config = {
    user: 'postgres',
    host: process.env.DBURL,
    database: 'postgres',
    password: process.env.DBPASS,
    port: 5432,
    ssl: {
        rejectUnauthorized: false
      }
}


const client = new pg.Pool(config);

client.connect(err => {
    if(err) {
        console.log(err);
    }
});


module.exports = client;