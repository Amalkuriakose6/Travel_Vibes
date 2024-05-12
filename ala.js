$(document).ready(function() {
    $('.menu-item').click(function() {
      // Toggle visibility of the description
      $(this).find('.item-description').slideToggle();
    });
  });
  