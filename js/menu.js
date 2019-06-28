

window.onscroll = () => {
    console.log('Hello')
    const header = document.querySelector('#header1');
    if(this.scrollY <= 10) header.className = ''; else header.className = 'scroll';
  };

  function redirectToURL(){
    console.log('Hello yall')
        document.querySelector('#button1').style.background='yellow'}