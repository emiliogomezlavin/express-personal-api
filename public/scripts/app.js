console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $.get('/api/profile').success(function (profile) {
    $('#curr-city').html(profile[0].current_city);
    $('#pets').html(renderPets(profile));
    $('#drinks').html(renderDrinks(profile));
  });

  $.get('/api/artists').success(function (artists) {
    for(var i=0; i<artists.length; i++){
        renderArtist(artists, i);
    }
  });

  $('#singlebutton').submit(function(event) {
    event.preventDefault();
    var data = $(this).serialize();
    console.log(data);
    $.post('/api/artists', data).success(function(newArtist) {
      renderArtist(newArtist);
    });
    $(this).trigger('reset'); 
  });
});



function renderPets (profile) {
  var stringHTML = "";
  for (i=0; i<profile[0].pets.length; i++){
    stringHTML = stringHTML + profile[0].pets[i].type +': ' + profile[0].pets[i].name   + ' - ' + profile[0].pets[i].breed + "</br>";
  }
  return stringHTML;
}

function renderDrinks (profile) {
  var stringHTML = "";
  for (i=0; i<profile[0].favorite_drinks.length; i++){
    stringHTML = stringHTML + profile[0].favorite_drinks[i].name +': ' + profile[0].favorite_drinks[i].origin   + ' - ' + profile[0].favorite_drinks[i].cocktail + "</br>";
  }
  return stringHTML;
}

function renderArtist(artist, i) {
  console.log('rendering artist:', artist);

  var artistHtml =
  "        <!-- one album -->" +
  "        <div class='row album' data-album-id='" + "HARDCODED ALBUM ID" + "'>" +
  "          <div class='col-md-10 col-md-offset-1'>" +
  "            <div class='panel panel-default'>" +
  "              <div class='panel-body'>" +
  "              <!-- begin album internal row -->" +
  "                <div class='row'>" +
  "                  <div class='col-md-9 col-xs-12'>" +
  "                    <ul class='list-group'>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Artist Name:</h4>" +
  "                        <span class='album-name'>" + artist[i].name + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Origin:</h4>" +
  "                        <span class='artist-name'>" + artist[i].country + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Released date:</h4>" +
  "                        <span class='album-name'>" + artist[i].years + "</span>" +
  "                      </li>" +
  "                    </ul>" +
  "                  </div>" +
  "                  <div class='col-md-3 col-xs-12 thumbnail album-art'>" +
  "                     <img src='" + "http://placehold.it/400x400'" +  " alt='album image'>" +
  "                  </div>" +
  "                </div>" +
  "                <!-- end of album internal row -->" +

  "              </div>" + // end of panel-body

  "              <div class='panel-footer'>" +
  "              </div>" +

  "            </div>" +
  "          </div>" +
  "          <!-- end one album -->";

  $('#artists').prepend(artistHtml);
 }