$(function(){
  var takeDown = $('#takeDown');
  var res = $('#Restock');
  var list = $('#BeerLyrics');

  var xBeer = 99;

var bottleString = function(num) {
    var str = num + ' bottle';
    if(num !== 1) {
      str += 's';
    }
    return str;
  };

res.on('click', function() {
  xBeer = 99;
  list.children().remove();
  list.append('<li>99 bottles of beer on the wall!</li>');
});

takeDown.on('click', function() {
takeValue = $('#takeValue').val();
  if (takeValue >= xBeer) {
    list.append('<li>.... you drank all the beer ...</li>');
    $('#BeerLyrics').animate({scrollTop: $('#BeerLyrics').prop("scrollHeight")}, 300);
  } else if (takeValue >= 1) {
    var str1 = bottleString(xBeer) + " of beer on the wall, " + bottleString(xBeer) + " bottles of beer! ";
    var str2 = "take " + takeValue + " down, pass " + (takeValue == 1 ? 'it' : 'them') + " around, ";
    xBeer = xBeer - takeValue;
    var str3 = bottleString(xBeer) + ' of beer on the wall!';
    list.append('<li>' + str1 + '</li>');
        list.append('<li>' + str2 + '</li>');
            list.append('<li>' + str3 + '</li>');
              list.append('<li>-</li>');
              $('#BeerLyrics').animate({scrollTop: $('#BeerLyrics').prop("scrollHeight")}, 300);
  } else {
    alert('please enter a valid Int');
  }
});



});
