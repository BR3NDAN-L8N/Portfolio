const http = require('http');
const { URL } = require('url');
const fixieUrl = new URL(process.env.FIXIE_URL);
const requestUrl = new URL('https://brendan-developer-portfolio.herokuapp.com/email/send-email');

module.exports 
http.post({
    host: fixieUrl.hostname,
    port: fixieUrl.port,
    path: requestUrl.href,
    headers: {
        Host: requestUrl.host,
        'Proxy-Authorization': `Basic ${Buffer.from(fixieUrl.auth).toString('base64')}`,
    }
}, res => {
    console.log(`Got response: ${res.statusCode}`);
});