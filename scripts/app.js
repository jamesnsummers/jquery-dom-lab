'use strict';

$( document ).ready(function whenLoaded(){

  $('#greeting').text('Hola');

  var $newH1 = $('<h1>A Spanish Greeting</h1>');
  $('.container').prepend($newH1);

  var $newCol = $('<div id="greetingTwo">¿Que tal?</div>');
  $('.row').append($newCol);

  // selecting two specific id's
  $('#greeting, #greetingTwo').addClass('blue');
  // selecting all anchor tags that are wtihin a p tag
  $('p a')
  // Your jQuery here
  // 1. Get the value "Hello There".

  // 2. Change (or set) the value to "Hola".

  // 3. Add an h1 to the page that says "A Spanish Greeting".

  // 4. Add a second greeting ("Que tal?"), in a second column to the right of the first.

  // 5. Add the class "blue" to both greetings.

});
