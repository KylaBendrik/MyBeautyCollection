domready(() => {
  const thingInputs = document.querySelectorAll('input[name=product_type]');
  const makeupInputs = document.querySelector('#makeupInputs');
  const skincareInputs = document.querySelector('#skincareInputs');
  const colorInputs = document.querySelector('#colorInputs');
  const hasColor = document.querySelector('#hasColor');

  const displayValue = function(value) {
    if (value === 'makeup') {
      makeupInputs.style.display = 'block';
      skincareInputs.style.display = 'none';
    } else if (value === 'skincare') {
      makeupInputs.style.display = 'none';
      skincareInputs.style.display = 'block';
    }
  };

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

for (const thing of thingInputs){
  thing.addEventListener('change', _inputEvent => {
    displayValue(thing.value);
  });
}

displayValue(document.querySelector ('input[name=product_type]:checked').value);


});
