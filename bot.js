const moment = require('moment-timezone');
const secret = require('./secret');
const Discord = require('discord.js');
const client = new Discord.Client();

exports.initBot = (callback) => {
    client.login(secret.botToken);
    client.on('ready', () => {
        callback();
    });
};

exports.setChannelName = () => {
    const channel = client.channels.cache.get(secret.channelId);
    moment.locale("de-at");
    const currentTime = moment.tz(secret.timezone).format('LT');
    channel.setName(currentTime);
}
