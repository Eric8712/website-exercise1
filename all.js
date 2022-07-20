 // collapse
 $(document).ready(function() {
    $(".collapse-title").on("mouseenter", function () {
        $(".collapse-content").slideToggle("250");
    });
    $(".collapse-title") && $(".collapse-content") .on("mouseleave", function () {
        $(".collapse-content").slideToggle("250");
    });
});

//Navbar RWD導覽列漢堡Icon

$(document).ready(function() {
    $('.Showmenu').on('click',function(event) {
        event.preventDefault();
        $('body').toggleClass('menu-show');
        $('.Showmenu').toggleClass('toggle')
    })
    $('.nav-list li a').on('click',function(event) {
        $('body').toggleClass('menu-show');
        $('.Showmenu').toggleClass('toggle')
    })
    // $('.Showmenu').on('click',function(event) {
    //     event.preventDefault();
    //     $('body').toggleClass('toggle')
    // })
})
