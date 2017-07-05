domready(() => {
  const productInputs = document.querySelectorAll('input[name=product_type]');
  const makeupInputs = document.querySelector('#makeupInputs');
  const makeupInputs1 = document.querySelectorAll('input[name=makeup_type]');
  const makeupType = document.getElementsByClassName('makeup_type')
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
  const ifBad = document.querySelector('#ifBad');
  const badReaction= document.querySelector('#badReaction');
  const colorPicker = document.querySelector('#colorPicker')

  // product type
  const displayValue = function (value) {
    if (value === 'makeup') {
      makeupInputs.style.display = 'block';
      skincareInputs.style.display = 'none';
      benefitInputs.style.display = 'none';
      if (hasColor.checked){

      } else {
        document.getElementById("hasColor").click();
      }
    } else if (value === 'skincare') {
      makeupInputs.style.display = 'none';
      skincareInputs.style.display = 'block';
      benefitInputs.style.display = 'block';
      if (hasColor.checked){
        document.getElementById("hasColor").click();
      }
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
  const displayColor = function (checked) {
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

console.log ("start color picker");
  const defaultColor = function (value) {
    console.log ("default function");
    if (value === "foundation") {
      console.log ("foundation");
      defaultColor.value = "#ecba99";
    } else {
      console.log ("other");
      defaultColor.value = "#ff0000";
    }
  };

    defaultColor(makeupInputs.value);
console.log (makeupType.length)
for (var i=0; i < makeupType.length; i++){
  makeupType[i].addEventListener('click', _changeEvent => {
    console.log ("change");
    defaultColor(makeupInputs.value);
  });
}


//  if (document.querySelector('#foundation').) {
//    document.querySelector('#colorPicker').value = "#ecba99"
//  }

  // good stuff input
  const displayGood = function (checked) {
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
  const displayWarning = function (checked) {
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

  //bad reaction inputs
  const displayBadReaction = function (checked) {
    if (checked) {
      badReaction.style.display = 'block';
    } else {
      badReaction.style.display = 'none';
    }
  }

  ifBad.addEventListener('change', _changeEvent => {
    displayBadReaction(ifBad.checked);
  });

  displayBadReaction(ifBad.checked);

});
