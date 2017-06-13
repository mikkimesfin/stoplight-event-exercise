(function() {
  'use strict';

  // YOUR CODE HERE

  var stopButton = document.querySelector('#stopButton');
  var slowButton = document.querySelector('#slowButton');
  var goButton = document.querySelector('#goButton');

  var stopLight = document.querySelector('#stopLight');
  var slowLight = document.querySelector('#slowLight');
  var goLight = document.querySelector('#goLight');

  // part 1
  stopButton.addEventListener('click', () => {
    stopLight.classList.toggle('stop');

  });

  slowButton.addEventListener('click', () => {
    slowLight.classList.toggle('slow');
  });

  goButton.addEventListener('click', () => {
    goLight.classList.toggle('go');
  });

  // part 2
  var handleMouseEnter = (event) => {
    console.log(`Entered ${event.target.textContent} button`);
  };

  var handleMouseLeave = (event) => {
    console.log(`Left ${event.target.textContent} button`);
  };

  stopButton.addEventListener('mouseenter', handleMouseEnter);
  slowButton.addEventListener('mouseenter', handleMouseEnter);
  goButton.addEventListener('mouseenter', handleMouseEnter);

  stopButton.addEventListener('mouseleave', handleMouseLeave);
  slowButton.addEventListener('mouseleave', handleMouseLeave);
  goButton.addEventListener('mouseleave', handleMouseLeave);
})();
