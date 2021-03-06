// mouseover
const bgHeadHover = document.querySelector('.bgcontainer');
bgHeadHover.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '6rem';
    event.target.style.cursor = 'pointer';
    event.target.style.transitionDuration = '.3s';
    event.target.style.color = 'dodgerblue';
 
   });

   bgHeadHover.addEventListener('mouseleave', function (event) {
    event.target.style.fontSize = '';
    event.target.style.color = 'black';
  });


  //button style actions on click//

  const buttonClick = document.querySelectorAll('.btn');

  buttonClick.forEach((btn) => {
      btn.addEventListener('click', (event) => {
          event.target.style.backgroundColor = '#3066BE';
          event.target.style.color = 'gold';
          event.stopPropagation;
      });
  })


// mouseover/mouseleave: text getting bigger then shrinking

const formHeader = document.querySelector('.formheader');

formHeader.addEventListener('mouseover', (event) => {
   event.target.style.fontSize = '2rem';
   event.stopPropagation;
});
formHeader.addEventListener('mouseleave', (event) => {
   event.target.style.fontSize = '1rem';
   event.stopPropagation;
});


//mouseover/mouseleave on buttons

const helpHeader = document.querySelector('.howhelp');

helpHeader.addEventListener('mouseover', (event) => {
   event.target.style.fontSize = '5rem';
   event.stopPropagation;
});
helpHeader.addEventListener('mouseleave', (event) => {
   event.target.style.fontSize = '3rem';
   event.stopPropagation;
});



//getting text content of an element

var helpParagraph = document.querySelector('.helpp');
text = helpParagraph.textContent || helpParagraph.innerText;
console.log(text);