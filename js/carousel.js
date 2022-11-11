const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right') ;
const prevButton = document.querySelector('.carousel__button--left') ;

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;



//arrange slides beside each other
const setSlidePosition =(slide, index) =>{
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);
   
const moveToSlide = (track,currentSlide,targetSlide) =>{
    track.style.transform = 'translateX(-' + targetSlide.style.left +')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');  
}


prevButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = (currentSlide.previousElementSibling);

    moveToSlide(track,currentSlide,prevSlide)
})
//move slides right when click right
nextButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = (currentSlide.nextElementSibling);
    

    //move to next slide
    moveToSlide(track, currentSlide, nextSlide);
})
//move slides left when click left

