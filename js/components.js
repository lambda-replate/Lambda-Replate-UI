class Link{
     constructor(element){ 
      this.element = element;
      console.log('hello there')
      this.content = document.querySelector(`.content[data-tab='${this.element.dataset.tab}']`);
      this.content = new Content(this.content);
      this.element.addEventListener('click', ()=> this.linkClick());
    }
    //methods
    linkClick(){    
      this.content.toggleTabContents();
    }
   }
  
  class Content{
    constructor(content){
      this.contentTab = content;
      console.log(this.contentTab); 
    }
    
    toggleTabContents(){
    document.querySelectorAll('.content').forEach(content => content.classList.remove('change'));
    this.contentTab.classList.toggle('change');
  }}
  
//   //STEP 1 Get element we are grabbing
  
  const links = document.querySelectorAll('.link');

//   //const random = document.querySelectorAll('tab-links')
  
  links.forEach(function(link){
      console.log('Why me! why wont you wooorrrkkk ')
   return new Link(link);
})


//Animation

money = document.querySelector('.fa-money-bill-alt')
users = document.querySelector('.fa-user-friends')
blog = document.querySelector('.fa-blog')
star = document.querySelector('.fa-star')


money.addEventListener('mouseover', function mouseOver(){
  money.classList.add('animated', 'infinite', 'tada');
  money.style.color= 'ForestGreen';
});
money.addEventListener('mouseout', function mouseOut(){
  money.classList.remove('animated', 'infinite', 'tada');
  money.style.color= '';
});

users.addEventListener('mouseover', function mouseOver(){
  users.classList.add('animated', 'infinite', 'rubberBand');
  users.style.color= 'SteelBlue';
});
users.addEventListener('mouseout', function mouseOut(){
  users.classList.remove('animated', 'infinite', 'rubberBand');
  users.style.color= '';
});

blog.addEventListener('mouseover', function mouseOver(){
  blog.classList.add('animated', 'infinite', 'heartBeat');
  blog.style.color= 'FireBrick';
});
blog.addEventListener('mouseout', function mouseOut(){
  blog.classList.remove('animated', 'infinite', 'heartBeat');
  blog.style.color= '';
});

star.addEventListener('mouseover', function mouseOver(){
  star.classList.add('animated', 'infinite', 'flash');
  star.style.color= 'Gold';
});
star.addEventListener('mouseout', function mouseOut(){
  star.classList.remove('animated', 'infinite', 'flash');
  star.style.color= '';
});
