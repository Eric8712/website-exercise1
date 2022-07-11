 // collapse
 $(document).ready(function() {
    $(".collapse-title").on("mouseenter", function () {
        $(".collapse-content").slideToggle("250");
    });
    $(".collapse-title") && $(".collapse-content") .on("mouseleave", function () {
        $(".collapse-content").slideToggle("250");
    });
});
