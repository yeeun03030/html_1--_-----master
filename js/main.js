$(function(){
    $(".slideshow").each(function(){
        var $slides = $(this).find('img'),
            slideCount = $slides.length,
            currentIndex = 0;
        $slides.eq(currentIndex).fadeIn();

        setInterval(showNextSlide, 7500);

        function showNextSlide(){
            var nextIndex = (currenIndex + 1) % slideCount;

            $slides.eq(currenIndex).fadeOut();

            $slides.eq(nextIndex).fadeIn();

            currentIndex = nextIndex;
        }
    });
});