module.exports = {
    nickname: "hot_slack_bot",
    server: "irc.oftc.net",
    token: process.env.SLACK_TOKEN,
    channelMapping: {
      "#hot_irc_channel": "#hot"
    }
}
