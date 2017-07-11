const http = require('http');

const renderPage = function renderPage(res, statusCode, content) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'text/html');
  res.end(content);
};

const renderJSON = function renderJSON(res, statusCode, content) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'text/json');
  res.end(content);
};

const productView = function productView() {
  const products = [
    {id: 4, name: 'Dave\'s Sticky Goop', desc: 'Use at your own risk'},
    {id: 10, name: 'Green Shampoo', desc: 'There\'s aliens in it'}
  ];

  return JSON.stringify(products);
}

const server = http.createServer((req, res) => {
  console.log(req.url);

const aboutView = function aboutView() {
  return `
   <h1>
     A bunch of text in this header!
   </h1>
  `;
}

  if (req.url === '/'){
    renderPage(res, 200, 'Hello World\n');
  } else if (req.url === '/about'){
    renderPage(res, 200, aboutView());
  } else if (req.url === '/products'){
    renderPage(res, 200, productView());
  } else {
    renderPage(res, 404, `There is no page at ${req.url}. 404`);
  }
});

const port = 3000;
const hostname = '127.0.0.1';

server.listen(port, hostname, () =>{
  console.log(`Server running at http://${hostname}:${port}/`);
});
