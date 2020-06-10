const path = require('path');
const mariadb = require('mariadb');
require('dotenv').config();

const locationOfCsv = (productName) => {
  return path.join(__dirname, '/formatted', `${productName}.csv`);
};

const loadCsv = (location, tableName) => {
  return mariadb
    .createConnection({
      host: process.env.DBHOST,
      user: 'root',
      password: process.env.DBPASS,
      database: process.env.DB,
      port: 3306,
      permitLocalInfile: true,
    })
    .then((conn) => {
      console.log('running', query);
      return conn
        .query(
          `LOAD DATA LOCAL INFILE '${locationOfCsv(
            location
          )}' INTO TABLE ${tableName} FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n'`
        )
        .then((query) => {
          console.log('completed', query);
          conn.end();
        });
    })
    .catch((err) => {
      console.log('this is the error', err);
      conn.end();
    });
};

//You must run these settings change commands in maria before you can run massload:
// set global net_buffer_length=1048576;
// set global max_allowed_packet=1073741824;
// these files had to be split so far apart because the target ec2 instance couldn't
// handle the size of the files
const massLoad = () => {
  loadCsv('product', 'Product')
    .then(() => {
      return loadCsv('styles', 'Styles');
    })
    .then(() => {
      return loadCsv('skus_1', 'Skus');
    })
    .then(() => {
      return loadCsv('skus_2', 'Skus');
    })
    .then(() => {
      return loadCsv('skus_3', 'Skus');
    })
    .then(() => {
      return loadCsv('skus_4', 'Skus');
    })
    .then(() => {
      return loadCsv('skus_5', 'Skus');
    })
    .then(() => {
      return loadCsv('skus_6', 'Skus');
    })
    .then(() => {
      return loadCsv('features', 'Features');
    })
    .then(() => {
      return loadCsv('related', 'Related_Products');
    })
    .then(() => {
      return loadCsv('photos_1', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_2', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_3', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_4', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_5', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_6', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_7', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_8', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_9', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_10', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_11', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_12', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_13', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_14', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_15', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_16', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_17', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_18', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_19', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_20', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_21', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_22', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_23', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_24', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_25', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_26', 'Photos');
    })
    .then(() => {
      return loadCsv('photos_27', 'Photos');
    })
    .catch((err) => console.log(err));
};

massLoad();
