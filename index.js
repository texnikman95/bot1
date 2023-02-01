const { Telegraf } = require('telegraf');
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKKEN);

var CronJob = require('cron').CronJob;
var job = new CronJob(
    '* * * * * *',
    function() {
        bot.start((ctx) => ctx.reply('Welcome'));
    },
    null,
    true,
    'America/Los_Angeles'
);
// Use this if the 4th param is default value(false)
// job.start()






job.start()
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));