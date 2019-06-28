
const btn = document.querySelector('.dropdown');


  window.onscroll = () => {
    console.log('Hello')
    const header = document.querySelector('#header1');
    if(this.scrollY <= 10) header.className = ''; else header.className = 'scroll';
  };

//   document.getElementById("myForm").addEventListener("submit", myFunction);

// function myFunction() {
//   alert("The form was submitted");
// }

function goBack() {
  window.history.back();
}