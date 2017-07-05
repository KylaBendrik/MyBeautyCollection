domready(() => {
  const productInputs = document.querySelectorAll('input[name=product_type]');
  const makeupInputs = document.querySelector('#makeupInputs');
  const makeupInputs1 = document.querySelectorAll('input[name=makeup_type]');
  //going almost directly from answer from
  //https://stackoverflow.com/questions/39452193/loop-through-array-and-add-event-listener-click-to-each
  var makeupTypes = [].slice.call(document.getElementsByClassName('makeup_type'));
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
  const colorPicker = document.querySelector('#colorPicker');
  const hasUsed = document.querySelector('#hasUsed');
  const reviewInputs = document.querySelector('#review');

function colorOn (checked) {
  if (hasColor.checked){
    console.log ("it's already on!");
  } else {
    document.getElementById("hasColor").click();
    console.log ("I turned it on for ya. You're welcome.");
  };
};

function colorOff (checked) {
  if (hasColor.checked){
    document.getElementById("hasColor").click();
    console.log ("Oops. It's off now. <_<");
  } else{
    console.log ("It's off, like you wanted.");
  };
}
  // product type
  const displayValue = function (value) {
    if (value === 'makeup') {
      makeupInputs.style.display = 'block';
      skincareInputs.style.display = 'none';
      benefitInputs.style.display = 'none';
      colorOn (hasColor.checked);
    } else if (value === 'skincare') {
      makeupInputs.style.display = 'none';
      skincareInputs.style.display = 'block';
      benefitInputs.style.display = 'block';
      colorOff (hasColor.checked);
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

  document.querySelector('#foundationClaims').style.display = 'none';
  document.querySelector('#eyeshadowClaims').style.display = 'none';

  const defaultColor = function (value) {
    if (value === "foundation") {
      console.log ("foundation");
      colorPicker.value = "#ecba99";
      document.querySelector('#foundationClaims').style.display = 'block';
      document.querySelector('#eyeshadowClaims').style.display = 'none';
      colorOn (hasColor.checked);
    } else if (value === 'eyeshadow'){
      console.log ("eyeshadow");
      colorPicker.value = "#000000";
      document.querySelector('#foundationClaims').style.display = 'none';
      document.querySelector('#eyeshadowClaims').style.display = 'block';
      colorOn (hasColor.checked);
    } else if (value === "concealer") {
      console.log ("concealer");
      colorPicker.value = "#ecba99";
      document.querySelector('#foundationClaims').style.display = 'none';
      document.querySelector('#eyeshadowClaims').style.display = 'none';
      colorOn (hasColor.checked);
    } else if (value === "primer") {
      console.log ("primer");
      document.querySelector('#foundationClaims').style.display = 'none';
      document.querySelector('#eyeshadowClaims').style.display = 'none';
      colorOff (hasColor.checked);
    } else{
      console.log ("other");
      document.querySelector('#foundationClaims').style.display = 'none';
      document.querySelector('#eyeshadowClaims').style.display = 'none';
      colorPicker.value = "#000000";
      colorOn (hasColor.checked);
    }
  };

    defaultColor(makeupInputs.value);

makeupTypes.forEach(function (element, index){
  element.addEventListener("click", function(){
    defaultColor(makeupTypes[index].value)
  });
});


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

//review questions

const displayReview = function (checked) {
  if (checked) {
    reviewInputs.style.display = 'block';
  } else {
    reviewInputs.style.display = 'none';
  }
};

hasUsed.addEventListener('change', _changeEvent => {
  displayReview(hasUsed.checked);
});

displayReview(hasUsed.checked);

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
