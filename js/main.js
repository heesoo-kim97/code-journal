/* global data */
/* exported data */
var $photoUrl = document.querySelector('.photoUrl');
$photoUrl.addEventListener('input', urlHandler);

var $photo = document.querySelector('.img-preview');
$photo.addEventListener('error', errorHandler);

function urlHandler(event) {
  $photo.setAttribute('src', $photoUrl.value);
}

function errorHandler(event) {
  $photo.setAttribute('src', 'images/placeholder-image-square.jpg');
}

var $entryForm = document.querySelector('.entry-form');
$entryForm.addEventListener('submit', handleSaveButton);

function handleSaveButton(event) {
  event.preventDefault();
}

var $entryTitle = document.querySelector('#entry-title');
var $entryUrl = document.querySelector('#entry-url');
var $entryNotes = document.querySelector('#entry-notes');

var newObject = {
  title: $entryTitle.value,
  url: $entryUrl.value,
  notes: $entryNotes.value,
  id: data.nextEntryId
};

data.nextEntryId++;
data.entries.unshift(newObject);
