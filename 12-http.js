const http = require("http");

// req -> the incoming request (a client is requesting from the web browser your webpage, so you'll have information about the method and all kinds of useful stuff in that requets object)
// res -> what we are sending back

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    }
    else if (req.url === '/about') {
        res.end('Here is our short history');
    }
    else res.end(
        `
            <h1>Ooops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">Back Home</a>
        `
    );
});

// What port our server is going to be listening to
server.listen(5000);