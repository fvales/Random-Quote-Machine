
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
