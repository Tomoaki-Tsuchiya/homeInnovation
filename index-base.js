"use stict";
const PORT = process.env.PORT || 1880;
const ngrok = require('ngrok');

connectNgrok().then(url => {
    console.log('URL : ' + url);
});
const BroadlinkServer = require('broadlink-rm-server');
const commands = require('./commands');

let app = BroadlinkServer(commands);
    app.listen(PORT)
// ngrokを非同期で起動
async function connectNgrok() {
    let url = await ngrok.connect(1880);
    return url;
}
console.log('Server running, go to http://localhost:' + PORT);
