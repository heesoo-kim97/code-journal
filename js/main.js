/* global data */
/* exported data */
var $photoUrl = document.querySelector('.photoUrl');
$photoUrl.addEventListener('input', photoHandler);

var $photo = document.querySelector('.img-preview');

function photoHandler(event) {
  $photo.setAttribute('src', $photoUrl.value);
}

// var $entry = document.querySelector('.entry-form');
var $button = document.querySelector('.save-button');
$button.addEventListener('click', handleSaveButton);

function handleSaveButton(event) {
  event.preventDefault();
}
