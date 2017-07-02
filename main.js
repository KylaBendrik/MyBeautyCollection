domready(() => {
  const productInputs = document.querySelectorAll('input[name=product_type]');
  const makeupInputs = document.querySelector('#makeupInputs');
  const skincareInputs = document.querySelector('#skincareInputs');
  const skincareInputs1 = document.querySelectorAll('input[name=skincare_type]');
  const maskInputs = document.querySelector('#maskInputs');
  const benefitInputs = document.querySelector('#benefitInputs');
  const hasColor = document.querySelector('#hasColor');
  const colorInputs = document.querySelector('#colorInputs');
  const isGood = document.querySelector('#isGood');
  const goodInputs = document.querySelector('#goodInputs');
  const warnings = document.querySelector('#warnings');
  const warningInputs = document.querySelector('#warningInputs');

  // product type
  const displayValue = function (value) {
    if (value === 'makeup') {
      makeupInputs.style.display = 'block';
      skincareInputs.style.display = 'none';
      benefitInputs.style.display = 'none';
    } else if (value === 'skincare') {
      makeupInputs.style.display = 'none';
      skincareInputs.style.display = 'block';
      benefitInputs.style.display = 'block';
    }
  };

  for (const thing of productInputs) {
    thing.addEventListener('change', _inputEvent => {
      displayValue(thing.value);
    });
  }

  displayValue(document.querySelector('input[name=product_type]:checked').value);

  // mask inputs
  const displayValue1 = function (value) {
    if (value === 'facemask') {
      maskInputs.style.display = 'block';
    } else {
      maskInputs.style.display = 'none';
    }
  };

  for (const thing of skincareInputs1) {
    thing.addEventListener('change', _inputEvent => {
      displayValue1(thing.value);
    });
  }

  displayValue1(document.querySelector('input[name=skincare_type]:checked').value);

  // color inputs
  displayColor = function (checked) {
    if (checked) {
      colorInputs.style.display = 'block';
    } else {
      colorInputs.style.display = 'none';
    }
  };

  hasColor.addEventListener('change', _changeEvent => {
    displayColor(hasColor.checked);
  });

  displayColor(hasColor.checked);

  // good stuff input
  displayGood = function (checked) {
    if (checked) {
      goodInputs.style.display = 'block';
    } else {
      goodInputs.style.display = 'none';
    }
  };

  isGood.addEventListener('change', _changeEvent => {
    displayGood(isGood.checked);
  });

  displayGood(isGood.checked);

  // warning stuff input
  displayWarning = function (checked) {
    if (checked) {
      warningInputs.style.display = 'block';
    } else {
      warningInputs.style.display = 'none';
    }
  };

  warnings.addEventListener('change', _changeEvent => {
    displayWarning(warnings.checked);
  });

  displayWarning(warnings.checked);

});
