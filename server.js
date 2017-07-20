const http = require('http');
const fs = require('fs');
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

const renderFile = function renderFile(res, statusCode, filename, mime = 'text/html') {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', mime);
  fs.createReadStream(filename).pipe(res);
};

const productView = function productView() {
  const products = [
    {id: 4, name: 'Dave\'s Sticky Goop', desc: 'Use at your own risk'},
    {id: 10, name: 'Green Shampoo', desc: 'There\'s aliens in it'},
    {id: 12, name: 'Generic Lip Balm', desc: 'For generic lips!'}
  ];

  return JSON.stringify(products);
}

const staticFiles = {
  'productList.js': 'text/javascript',
  'products.css': 'text/css',
  'main.js': 'text/javascript'
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

  if (req.url.slice(1) in staticFiles) {
    const filename = req.url.slice(1);
    const mime     = staticFiles[filename];

    renderFile(res, 200, filename, mime);
    return;
  }

  if (req.url === '/'){
    renderFile(res, 200, 'index.html');
  } else if (req.url === '/about'){
    renderFile(res, 200, 'about.html');
  } else if (req.url === '/products'){
    renderFile(res, 200, 'products.html');
  } else if (req.url === '/api/products'){
    renderJSON(res, 200, productView());
  } else {
    renderPage(res, 404, `There is no page at ${req.url}. 404`);
  }
});

const port = 3000;
const hostname = '127.0.0.1';

server.listen(port, hostname, () =>{
  console.log(`Server running at http://${hostname}:${port}/`);
});
