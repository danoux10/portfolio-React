const cardsProject = document.querySelectorAll('.project-card');
const cardsbutton = document.querySelectorAll('.toggle-card');

cardsbutton.forEach((cardbutton, index)=>{
  cardbutton.addEventListener('click', ()=>{
    cardsProject[index].classList.toggle('active');
  })
})