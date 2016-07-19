$(function(){

//define vars and classes
  var takeDown = $('#takeDown');
  var res = $('#Restock');
  var list = $('#BeerLyrics');
  var xBeer = 99;

//function for bottle/bottleS
var bottleString = function(num) {
    var str = num + ' bottle';
    if(num !== 1) {
      str += 's';
    }
    return str;
  };


//restock onclick
res.on('click', function() {
  xBeer = 99;
  list.children().remove();
  list.append('<li>99 bottles of beer on the wall!</li>');
});


//onclick start
takeDown.on('click', function() {

  takeValue = $('#takeValue').val();

  if (takeValue >= xBeer) {
    //if beer is empty or if takeBeer is higher than beer count
    list.append('<li>.... you drank all the beer ...</li>');
    $('#BeerLyrics').animate({scrollTop: $('#BeerLyrics').prop("scrollHeight")}, 300); //honestly not sure how this works but it scrolls

  } else if (takeValue >= 1) {
    // use multiple strings because xbeer starts as the number we have, then the number taken down.
    var str1 = bottleString(xBeer) + " of beer on the wall, " + bottleString(xBeer) + " bottles of beer! ";
    var str2 = "take " + takeValue + " down, pass " + (takeValue == 1 ? 'it' : 'them') + " around, ";
    xBeer = xBeer - takeValue; // because we are an alcoholic
    var str3 = bottleString(xBeer) + ' of beer on the wall!';
    //strings and a divider at the bottom, makes it look nice
    list.append('<li>' + str1 + '</li>');
    list.append('<li>' + str2 + '</li>');
    list.append('<li>' + str3 + '</li>');
    list.append('<li>-</li>');
    $('#BeerLyrics').animate({scrollTop: $('#BeerLyrics').prop("scrollHeight")}, 300);

  } else {
    // dont be dumb, there is a box for a reason dude
    alert('please enter a valid Int');
  }
});



});
