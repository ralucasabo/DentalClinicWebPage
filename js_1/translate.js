var ckDomain;
function googleTranslateElementInit() {

    function getCookie(name)
  {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
  }



 var kakan;
 var googkakan;


 kakan=getCookie("googtrans22");


$$(document).on('change', '#google_translate_element', function (e) {
    setTimeout(function(){
function getCookie(name)
  {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
  }

 googkakan=getCookie("googtrans");

 document.cookie = "googtrans22="+googkakan+"; expires=Thu, 07-Mar-2047 20:22:40 GMT; path=/" + ckDomain;
 document.cookie = "googtrans22="+googkakan+"; expires=Thu, 07-Mar-2047 20:22:40 GMT; path=/";


    },1000);
});

  for (var ckDomain = window.location.hostname.split("."); 2 < ckDomain.length;){
    ckDomain.shift();
  }
  ckDomain = ";domain=" + ckDomain.join(".");
  // domain cookie
  document.cookie = "googtrans="+kakan+"; expires=Thu, 07-Mar-2047 20:22:40 GMT; path=/" + ckDomain;
  // host-only cookie (with no domain name definition)
  document.cookie = "googtrans="+kakan+"; expires=Thu, 07-Mar-2047 20:22:40 GMT; path=/";



new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,ro', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');

}



    (function() {
          var googleTranslateScript = document.createElement('script');
          googleTranslateScript.type = 'text/javascript';
          googleTranslateScript.async = true;
          googleTranslateScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
          ( document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] ).appendChild( googleTranslateScript );
        })();
