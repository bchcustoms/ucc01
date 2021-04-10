function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5xfjudL3wnr":
        Script1();
        break;
      case "5dwK73YaIPT":
        Script2();
        break;
      case "5Zy6WWCZBKG":
        Script3();
        break;
      case "5iaQxiFpKZZ":
        Script4();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var Tweet= player.GetVar("Tweet");
var numChars= Tweet.length;
player.SetVar("tweetLength",numChars);

window.open('http://twitter.com/home?status='+Tweet, "myTweet", "status = 1, height = 300, width = 300, resizable = 0");






}

function Script2()
{
  window.open('https://www.linkedin.com/cws/share?url=http%3A%2F%2Fec.europa.eu/taxation_customs/eu-training/general-overview/ucc-elearning-programme_en');






}

function Script3()
{
  var player = GetPlayer();
var Title= player.GetVar("Title");
var Post= player.GetVar("Post");
var URL= player.GetVar("URL");
window.open('https://www.facebook.com/sharer/sharer.php?s=100&p%5Btitle%5D='+Title+'&p%5Burl%5D=http%3A%2F%2F'+URL+'&p%5Bsummary%5D='+Post+'&p%5Bimages%5D%5B0%5D=http%3A%2F%2Fwww.urltoyourimage.com', "Post to Facebook", "status = 1, height = 300, width = 300, resizable = 0");
}

function Script4()
{
  window.print()
}

