const menu = document.querySelector('.menu');
const menu_about = document.getElementById('menu_about');
const menu_services = document.getElementById('menu_services');
const menu_portfolio = document.getElementById('menu_portfolio');
const menu_contact = document.getElementById('menu_contact');

menu.addEventListener('click', function() {
     this.classList.toggle('toggle');
});

menu_about.addEventListener('click', function() {
     menu.classList.toggle('toggle');
});

menu_services.addEventListener('click', function() {
     menu.classList.toggle('toggle');
});

menu_portfolio.addEventListener('click', function() {
     menu.classList.toggle('toggle');
});

menu_contact.addEventListener('click', function() {
     menu.classList.toggle('toggle');
});

$(function () {
     $('.js-open').click(function () {
          $("body").addClass("no_scroll");
          var id = $(this).data('id');
          $('#overlay, .modal-window[data-id="modal' + id + '"]').fadeIn();
     });
     $('.js-close , #overlay').click(function () {
          $("body").removeClass("no_scroll");
          $('#overlay, .modal-window').fadeOut();
     });
});