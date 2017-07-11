const addTextItem = function addTextItem(list, text) {
  const li = document.createElement('li');

  li.innerText = text;

  list.appendChild(li);
};

domready(() => {
  const listView = document.querySelector('#productList');


  addTextItem(listView, 'Some text');
  addTextItem(listView, 'Some other text');
});
