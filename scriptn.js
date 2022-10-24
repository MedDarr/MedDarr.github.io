$(function (){
$('.slider').slick({
    infinite: true,
    slidesToShow:4, 
    slidesToScroll:4,
    dots:true,
    responsive:[
        {
            breakpoint:767,
            settings:{
                slidesToShow:4, 
                slidesToScroll:4,
            }
        }
    ]
});
})
