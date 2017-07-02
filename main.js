domready(() => {
  const productInputs = document.querySelectorAll('input[name=product_type]');
  const makeupInputs = document.querySelector('#makeupInputs');
  const skincareInputs = document.querySelector('#skincareInputs');
  const skincareInputs1 = document.querySelectorAll('input[name=skincare_type]');
  const colorInputs = document.querySelector('#colorInputs');
  const maskInputs = document.querySelector('#maskInputs');
  const hasColor = document.querySelector('#hasColor');

//product type
  const displayValue = function(value) {
    if (value === 'makeup') {
      makeupInputs.style.display = 'block';
      skincareInputs.style.display = 'none';
    } else if (value === 'skincare') {
      makeupInputs.style.display = 'none';
      skincareInputs.style.display = 'block';
    }
  };

  for (const thing of productInputs){
    thing.addEventListener('change', _inputEvent => {
      displayValue(thing.value);
    });
  }

  displayValue(document.querySelector ('input[name=product_type]:checked').value);

//mask inputs
  const displayValue1 = function(value) {
    if (value === 'facemask') {
      maskInputs.style.display = 'block';
    } else {
      maskInputs.style.display = 'none';
    }
  };

  for (const thing of skincareInputs1){
    thing.addEventListener('change', _inputEvent => {
      displayValue1(thing.value);
    });
  }

  displayValue1(document.querySelector ('input[name=skincare_type]:checked').value);

//color inputs
displayColor = function(checked) {
  if (checked){
    colorInputs.style.display = 'block';
  } else {
    colorInputs.style.display = 'none';
  }
}

hasColor.addEventListener('change', _changeEvent => {
  displayColor(hasColor.checked);
})

displayColor(hasColor.checked);




});
