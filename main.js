// al click delle barre aggiungo la classe active al menu per renderlo visibile
$('.header-right > a').click(function(){
  $('.hamburger-menu').addClass('active');
});

// al click di close rimuovo la classe active al menu per nasconderlo
$('.hamburger-menu .close').click(function(){
  $('.hamburger-menu').removeClass('active');
});