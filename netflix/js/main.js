// document.querySelector('.movie-principal-btn-more-info').addEventListener('click',function(evt){
//   const img = document.querySelector('.movie-principal-btn-more-info').dataset.img;
//   const edad = document.querySelector('.movie-principal-btn-more-info').dataset.edad;
//   const genero = document.querySelector('.movie-principal-btn-more-info').dataset.genero;
//   const duracion = document.querySelector('.movie-principal-btn-more-info').dataset.duracion;
//   const ano = document.querySelector('.movie-principal-btn-more-info').dataset.ano;
//   const titulo = document.querySelector('.movie-principal-btn-more-info').dataset.titulo;
//   const description = document.querySelector('.movie-principal-btn-more-info').dataset.description;

//   document.querySelector('.overlay-title').textContent = titulo;
//   document.querySelector('.overlay-description').textContent = description;

//   document.querySelector('.edad').textContent = edad;
//   document.querySelector('.genero').textContent = genero;
//   document.querySelector('.duracion').textContent = duracion;
//   document.querySelector('.img-overlay').src = img;
//   document.querySelector('.ano').textContent = ano;

//   document.querySelector('.overlay-padre').classList.add('active');
//   document.querySelector('.overlay').classList.add('display');
// });

// document.querySelector('#btn-x').addEventListener('click',function(evt){
//   document.querySelector('.overlay-padre').classList.remove('active');
// });

// /* ----------------------------------------------------------------------------------------------------------------------------- */
// // LISTENER 
// const movies_recommended = document.querySelectorAll('.movie img');
// movies_recommended.forEach((element) => {
//   element.addEventListener('click',(evt) => {
//     const img = evt.target.dataset.img;
//     const edad = evt.target.dataset.edad;
//     const genero = evt.target.dataset.genero;
//     const duracion = evt.target.dataset.duracion;
//     const ano = evt.target.dataset.ano;
//     const titulo = evt.target.dataset.titulo;
//     const description = evt.target.dataset.description;
  
//     document.querySelector('.overlay-title').textContent = titulo;
//     document.querySelector('.overlay-description').textContent = description;
  
//     document.querySelector('.edad').textContent = edad;
//     document.querySelector('.genero').textContent = genero;
//     document.querySelector('.duracion').textContent = duracion;
//     document.querySelector('.img-overlay').src = img;
//     document.querySelector('.ano').textContent = ano;
  
//     document.querySelector('.overlay-padre').classList.add('active');
//     document.querySelector('.overlay').classList.add('display');
//   });
// });


// const overlay = document.querySelector('.overlay-padre');

// overlay.addEventListener("click",function(evt){
//   evt.target.id === 'overlay-padre' ? overlay.classList.remove("active") : '';
// });

/* ----------------------------------------------------------------------------------------------------------------------------- */
const row = document.querySelector('.contenedor-carousel');
const movies = document.querySelectorAll('.movie');

const arrowRight = document.querySelector('#arrow-right');
const arrowLeft = document.querySelector('#arrow-left');

var rightIsPresioned = false;
var leftIsPresioned = false;

// WINDOW ON LOAD
window.addEventListener('load', () => {
  row.scrollLeft = 0;
});

// Listener flecha derecha
arrowRight.addEventListener('click',function(evt){
  if(rightIsPresioned == false){
    row.scrollLeft += row.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores button.active');
  
    if(indicadorActivo.nextElementSibling){
      indicadorActivo.classList.remove('active');
      indicadorActivo.nextElementSibling.classList.add('active');
    }

    rightIsPresioned = true;
      setTimeout(() => {
        rightIsPresioned = false;
    },500);
  }
});

// Listener flecha izquierda
arrowLeft.addEventListener('click',function(evt){
  if(leftIsPresioned == false){
    row.scrollLeft -= row.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores button.active');

    if(indicadorActivo.previousElementSibling){
      indicadorActivo.classList.remove('active');
      indicadorActivo.previousElementSibling.classList.add('active');
    }

    leftIsPresioned = true;
      setTimeout(() => {
        leftIsPresioned = false;
    },500);
  }
});

/* ----------------------------------------------------------------------------------------------------------------------------- */
// Indicadores

const numberOfPages = Math.ceil(movies.length / 5);

for(let i=0; i<numberOfPages; i++){
  const indicador = document.createElement('button');

  if(i === 0){
    indicador.classList.add('active');
  }

  document.querySelector('.indicadores').appendChild(indicador);

  indicador.addEventListener('click', (evt) => {
    row.scrollLeft = i * row.offsetWidth;

    document.querySelector('.indicadores button.active').classList.remove('active');

    indicador.classList.add('active');
  });
}

/* ----------------------------------------------------------------------------------------------------------------------------- */
movies.forEach((movie) => {
  movie.addEventListener('mouseenter', (e) => {
    const element = e.currentTarget;
    setTimeout(() => {
      movies.forEach(movie => movie.classList.remove('hover'));
      element.classList.add('hover');
    },300);
  });
});

row.addEventListener('mouseleave', () => {
  movies.forEach(movie => movie.classList.remove('hover'));
});