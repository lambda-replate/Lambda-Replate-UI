console.log('YOOOOO')

// class Dropdown {
  
//     constructor(element) {

//       this.element = element;
//   this.button = element.querySelector('.dropdown-button');      
//   this.content = element.querySelector('.dropdown-content');      
//    this.button.addEventListener('click', this.toggleContent.bind(this))
//     }
  
//     toggleContent() {
//       console.log('toggle')
//       this.content.classList.toggle('dropdown-hidden');
//       console.log(this.content.classList)
//       // console.log('Hello???')
//     }
//   }
  
  
//   // Nothing to do here, just study what the code is doing and move on to the Dropdown class
//   let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));


  window.onload=function(){

    class Dropdown {
      constructor(element) {
          this.element = element;
          this.button = this.element.querySelector('.dropdown-button');
          this.content = this.element.querySelector('.dropdown-content');
          this.button.addEventListener('click', () => {
              this.toggleContent();
          });
      }
          
          toggleContent() {
              this.content.classList.toggle('dropdown-hidden');
          }
      }
    
      let dropdowns = document.querySelectorAll('.dropdown').forEach(dropdown => new Dropdown(dropdown));

      

    // let btnddc = document.querySelector('.dropdown-button');
    // let ddc=document.querySelector('.dropdown-content');
    
    // btnddc.addEventListener('click', function(){
    //      ddc.classList.toggle('dropdown-hidden')
    // })
  }


