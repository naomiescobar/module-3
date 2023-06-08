// NAVEGATION BAR
function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }


// Hide the Navbar when scrolling
var prev = 0;
var $window = $(window);
var nav = $('.navbar');
$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('scrollup', scrollTop > prev);
  prev = scrollTop;
});


// Microsoft Translator
setTimeout(function(){{var s=document.createElement('script');s.type='text/javascript';s.charset='UTF-8';s.src=((location && location.href && location.href.indexOf('https') == 0)?'https://ssl.microsofttranslator.com':'http://www.microsofttranslator.com')+'/ajax/v3/WidgetV3.ashx?siteData=ueOIGRSKkd965FeEGM5JtQ**&ctf=False&ui=true&settings=Manual&from=';var p=document.getElementsByTagName('head')[0]||document.documentElement;p.insertBefore(s,p.firstChild); }},0);
