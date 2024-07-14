const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const head = document.querySelector('.h1')
head.addEventListener('click', function(h){
    head.style.backgroundColor = 'black';
});
buttons.forEach(function (button) {
//   console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target); -> event aa kaha se raha hai
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});