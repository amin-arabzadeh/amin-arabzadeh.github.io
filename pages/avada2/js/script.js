$(document).ready(function(){

    $('.btn2').click(function(){
        $('.menu').addClass('show-menu')
    })

    $('.exite').click(function(){
        $('.menu').removeClass('show-menu')
    })

    $('.toggle').click(function(){
        $('.ul1').fadeToggle(150)
    })

    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });




     







})

// $(document).ready(function() {
//     $('#autoWidth').lightSlider({
//         autoWidth:true,
//         loop:true,
//         onSliderLoad: function() {
//             $('#autoWidth').removeClass('cS-hidden');
//         } 
//     });  
//   });