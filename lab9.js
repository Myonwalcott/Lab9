$(document).ready(function() {
    // Filter images based on category
    $('.filter-button').on('click', function() {
        var filterValue = $(this).attr('data-filter');
        if (filterValue == 'all') {
            $('.gallery-item').show(400);
        } else {
            $('.gallery-item').not('.' + filterValue).hide(200);
            $('.gallery-item').filter('.' + filterValue).show(400);
        }
    });

    // Lightbox functionality
    $('#gallery').on('click', '.gallery-item img', function() {
        var imgSrc = $(this).attr('src');
        var lightbox = '<div class="lightbox">' +
                        '<span class="close-btn">&times;</span>' +
                        '<img src="' + imgSrc + '">' +
                        '</div>';
        $('body').append(lightbox);
        $('.lightbox').fadeIn();
    });

    // Close lightbox
    $('body').on('click', '.close-btn', function() {
        $('.lightbox').fadeOut(function() {
            $(this).remove();
        });
    });
});
