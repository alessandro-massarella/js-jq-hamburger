// funzione per far apparire il menu
$ ('.header-right a').click(function (){
  $ ('.hamburger-menu').addClass('active');
})

// funzione per far scomparire
$ ('.hamburger-menu a').click(function(){
  $ ('.hamburger-menu').removeClass('active');
})
