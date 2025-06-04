    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const slideContainer = document.querySelector('.slide-container');
    let currentSlide = 1;

    function updateSlider(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
      });

      slides[index].classList.add('active');
      dots[index].classList.add('active');

      const offset = -((index - 1) * (slides[0].offsetWidth + 32));
      slideContainer.style.transform = `translateX(${offset}px)`;

      currentSlide = index;
    }

    document.querySelector('.prev').addEventListener('click', () => {
      let newIndex = (currentSlide - 1 + slides.length) % slides.length;
      updateSlider(newIndex);
    });

    document.querySelector('.next').addEventListener('click', () => {
      let newIndex = (currentSlide + 1) % slides.length;
      updateSlider(newIndex);
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        updateSlider(index);
      });
    });

    updateSlider(currentSlide);