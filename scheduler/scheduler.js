const schedule = require('node-schedule')
const db = require('../src/database/connection')

module.exports = () => {
    var cronExpress = '* /5 * * * *';
    var dataSchedule = schedule.scheduleJob(cronExpress, () => {
        fetchData()
    });

};

const fetchData = () => {
    console.log("Schedule between 5 mins")
};
