'use strict';

$( document ).ready(function whenLoaded(){

  // Your jQuery here
  // 1. Get the value "Hello There".
  
  // 2. Change (or set) the value to "Hola".
  $('#greeting').text('Hola');
  // 3. Add an h1 to the page that says "A Spanish Greeting".
  var $newH1 = $('<h1>A Spanish Greeting</h1>');
  $('.container').prepend($newH1);
  // 4. Add a second greeting ("Que tal?"), in a second column to the right of the first.
  var $newCol = $('<div id="greetingTwo">¿Que tal?</div>');
  $('.row').append($newCol);
  // 5. Add the class "blue" to both greetings.

  // selecting two specific id's
  $('#greeting, #greetingTwo').addClass('blue');
  // selecting all anchor tags that are wtihin a p tag
  $('p a')

});
