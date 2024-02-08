var currentIndex = 0;
    var totalItems = document.querySelectorAll('.my-service-item').length;
    var container = document.getElementById('carousel-container');
    var itemWidth = document.querySelector('.my-service-item').clientWidth;
    const scrollBar = container.querySelector("div::-webkit-scrollbar")


    function nextSlide() {
      container.scrollBy(itemWidth, 0)
    }
    
    function prevSlide() {
        container.scrollBy(-itemWidth, 0)
    }

