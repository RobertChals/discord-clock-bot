const schedule = require('node-schedule');
const bot = require('./bot');

exports.initScheduler = () => {

    // every minute at 00 seconds
    let rule = new schedule.RecurrenceRule();
    rule.second = 0;

    schedule.scheduleJob(rule, () => {
        bot.setChannelName();        
    })
};
