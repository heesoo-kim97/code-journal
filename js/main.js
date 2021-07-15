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

  $photo.setAttribute('src', 'images/placeholder-image-square.jpg');

  $entryForm.reset();
}

function journalEntry(entry) {
  var $listItem = document.createElement('li');
  $listItem.className = 'entry-list-item';

  var $row = document.createElement('div');
  $row.className = 'row';
  $listItem.appendChild($row);

  var $imgColumn = document.createElement('div');
  $imgColumn.className = 'column-half';
  $row.appendChild($imgColumn);

  var $image = document.createElement('img');
  $image.setAttribute('src', entry.url);
  $image.className = 'max-width edge img-preview';
  $imgColumn.appendChild($image);

  var $textColumn = document.createElement('div');
  $textColumn.className = 'column-half';
  $row.appendChild($textColumn);

  var $entryHeading2 = document.createElement('h2');
  $entryHeading2.className = 'entry-heading';
  $entryHeading2.textContent = entry.title;
  $textColumn.appendChild($entryHeading2);

  var $entryNotes = document.createElement('p');
  $entryNotes.className = 'entry-paragraph';
  $entryNotes.textContent = entry.notes;
  $textColumn.appendChild($entryNotes);

  return $listItem;
}

var test;
test.addEventListener(journalEntry);
