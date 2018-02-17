const { writeFile } = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const config = require('config');
const request = require('request');

const sensorArgs = process.argv.slice(2);

if(!sensorArgs || sensorArgs.length !== 2) {
    process.exit();
    return;
}

const sensorName = sensorArgs[0];
const sensorValue = sensorArgs[1];

const body = { 
    value1: config.worker, 
    value2: sensorName, 
    value3: sensorValue
};
const { key, event } = config.ifft;

const options = {
    method: 'POST',
    uri: `https://maker.ifttt.com/trigger/${event}/with/key/${key}`,
    body,
    json: true
}

const filename = 'error.log';
const filepath = join(__dirname, filename);
const writeFileAsync = promisify(writeFile);

return Promise.resolve()
    .then(() => request(options))
    .catch((err) => writeFileAsync(filepath, err));
