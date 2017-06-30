domready(() => {
  const article = document.querySelector('#mainArticle');

  article.innerText = "This is your text now!";

  const paragraph = document.createElement('p');

  paragraph.innerText = 'This is a paragraph OF DOOM';

  article.appendChild(paragraph);

  console.log(article);

  const thingInput = document.querySelector('input[name=product_type]:checked');

  thingInput.addEventListener('input', _inputEvent => {
    document.querySelector('#reporter').innerText = thingInput.value;
  })




});
