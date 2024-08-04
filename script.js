$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1
    });
});

document.getElementById('buyButton').addEventListener('click', function() {
    alert('Button clicked!');
});
