
$("document").ready(function() {

  var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

  loadQuote();

  $("#newQuote").on("click",function()
                    {
    //$("#quote-block").fadeOut("fast");
    $("#quote-block").hide();
    loadQuote();
  });

  $("#tweet").on("click",tweetQuote);
});

function loadQuote() {
  var color = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

  /*var urls = [
    "http://www.edmdroid.com/wp-content/gallery/green-wallpaper/maple-leave-green-wallpaper.jpg","http://samequizy.pl/wp-content/uploads/2016/11/filing_images_e793717c4382-1.jpg","http://www.lanlinglaurel.com/data/out/192/5687122-gif-wallpaper.gif",
    "http://images.wookmark.com/139949_waves-tsunami-1280x800-wallpaper_www.wall321.com_24.jpg","https://images2.alphacoders.com/109/thumb-1920-109552.jpg","http://www.zingerbug.com/Backgrounds/background_images/purple_flame_fractal_background_seamless.jpg","https://s-media-cache-ak0.pinimg.com/originals/ed/c1/47/edc147e388fc053a6faaf5ada9334f1c.jpg","https://s-media-cache-ak0.pinimg.com/736x/dc/15/f7/dc15f7c4f3c8e24d8d7fbf22a9ac4558.jpg",
    "http://cdn.wallpapersafari.com/24/75/O1Josb.jpg",
    "http://www.firsthdwallpapers.com/uploads/2013/04/beautiful_cute_peacock-1366x768.jpg",
    "http://www.3dwallpaperstudio.com/wallpapers/futura_blue-2560x1440.jpg","https://images6.alphacoders.com/299/thumb-1920-299634.jpg"
  ]*/


  var random = Math.floor(Math.random()*10);

  $("button").css("background-color",color[random]);
  //$('body').css('background-image', 'url(' + urls[random] + ')');
  $("body").css("background-color",color[random]);
  $("#quote-block").css("color",color[random]);
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(result){
    //response data are now in the result variable
    //$(".quote").css("display","none");
    //   $(".author").css("display","none");
    $(".quote").html(result.quoteText);

    $(".author").html(result.quoteAuthor);
    $("#quote-block").fadeIn(500);

  });


}

function tweetQuote()
{
  var tweet_quote = $(".quote").text();
  var tweet_author = $(".author").text();
  var tweet = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweet_quote + ' \n' +"-"+ tweet_author);
  window.open(tweet);
}
