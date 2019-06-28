
const btn = document.querySelector('.dropdown');


  window.onscroll = () => {
    console.log('Hello')
    const header = document.querySelector('#header1');
    if(this.scrollY <= 10) header.className = ''; else header.className = 'scroll';
  };