/*const  prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'), */
    const dots = document.querySelectorAll('.dot'), // класс каждого дота
    slides = document.querySelectorAll('.slide'), // класс каждого слайда
    slidesWrapper = document.querySelectorAll('.content-wrapper');

let index = 0;


 
 const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
} 

 const activedot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activedot(ind);
} 

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);

    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
} 

 dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
          clearInterval(interval);
    })
}); 

/* 
const interval = setInterval(nextSlide, 3000);

 */