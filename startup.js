$( document ).ready(function(){

//this is one of the crappiest things ive ever made. And i am ashamed. But hey, it works.
  var gen = $('#generate');
  var list = $('#startupgen');
  var favList = $('#favorites');

//restock onclick
gen.on('click', function() {
  var startups = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
  var ideas = ['Kittens', 'Cars', 'Clowns', 'Insurance', 'Clothes', 'Food', 'Hipsters'];
  var random1 = Math.floor((Math.random() * startups.length)),
      random2 = Math.floor((Math.random() * ideas.length));
      gen1 = startups[random1];
      gen2 = ideas[random2];
  var generated = 'Like ' + gen1 + ' but for ' + gen2;
  var source   = $("#gen-temp").html();
  var template = Handlebars.compile(source);
  var context = {
    startup: generated
  };
  var liHTML = template(context);
  list.append(liHTML);
    var fav = $('.star');

  list.on('click', '.star' , function() {
      $(this).parent().appendTo(favList);
    });
});



//save - load
function addItem(startup) {
  // var $li = $('<li class="todo-item">').html(todo);
  // var $completeTaskLink = $('<span class="complete-task"> complete task</span>');
  // $li.append($completeTaskLink);
  // $todoList.append($li);
  var source   = $("#gen-temp").html();
  var template = Handlebars.compile(source);
  var context = {
    startup: startup
  };
  var liHTML = template(context);
  $startupgen.append(liHTML);




}



// add a click handler for the button, which adds an item to the todo list
// $button.on('click', 'button', function(e) {
//   event.preventDefault();
//
//   var itemText = $newItemInput.val();
//   if (!itemText) {
//     alert('You must type in a value!');
//     return;
//   }
//
//   clearInput();
//   addItem(itemText);
// });
//
// function clearInput() {
//   $newItemInput.val('');
// }
});
