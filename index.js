const { initScheduler } = require('./schedule');
const { initBot } = require('./bot');

initBot(() => {
    initScheduler();
});
