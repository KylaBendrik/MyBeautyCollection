domready(() => {
  const thingInputs = document.querySelectorAll('input[name=product_type]');
  const makeupInputs = document.querySelector('#makeupInputs');
  const skincareInputs = document.querySelector('#skincareInputs');


  const displayValue = function(value) {
    if (value === 'makeup') {
      makeupInputs.style.display = 'block';
      skincareInputs.style.display = 'none';
    } else if (value === 'skincare') {
      makeupInputs.style.display = 'none';
      skincareInputs.style.display = 'block';
    }
  };

for (const thing of thingInputs){
  thing.addEventListener('change', _inputEvent => {
    displayValue(thing.value);
  });
}

displayValue(document.querySelector ('input[name=product_type]:checked').value);


});
