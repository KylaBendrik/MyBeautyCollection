const addTextItem = function addTextItem(list, text) {
  const li = document.createElement('li');

  li.innerText = text;

  list.appendChild(li);
};

domready(() => {
  const listView = document.querySelector('#productList');

  const handleResponse = products => {
    for (const product of products){
      addTextItem(listView, product.name);
    }
  };

  fetch('/api/products')
    .then(response => response.json())
    .then(handleResponse);

  addTextItem(listView, 'Some text stuff');
  addTextItem(listView, 'Some other text');
});
