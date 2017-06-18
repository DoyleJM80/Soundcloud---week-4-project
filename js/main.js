// stream_url
/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with


// 2. Create your `onSubmit` event for getting the user's search term


// 3. Create your `fetch` request that is called after a submission


// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play

(function () {
  'use strict';

  var myHeaders = {
    Authorization: 'token ' + TOKEN
  };

  // urls
  var userInput = '';
  var searchUrl = 'http://api.soundcloud.com/tracks/?client_id=' + TOKEN + '&q=';
  // var searchUrl = 'http://api.soundcloud.com/tracks/?client_id=' + TOKEN+'&q='+userInput;

  // get-elements
  var searchForm = document.getElementById('search-form');

  // onSubmit

  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    userInput = document.getElementById('submit').value;
    searchUrl += userInput;
    // function musicSearch() {
    fetch(searchUrl).then(function (res) {
        res.json().then(function (data) {
          data.forEach(function (item) {
            // create elements
            // console.log(item.stream_url);
              var trackCont = document.createElement('div');
              var imgBox = document.createElement('div');
              var artistName = document.createElement('span');
              var trackName = document.createElement('span');
              var img = '<img src="https://s-media-cache-ak0.pinimg.com/originals/68/f2/9a/68f29a5da65ace8159029d7473594b14.jpg">';
              // set attributes
              trackCont.setAttribute('class', 'track-box');
              imgBox.setAttribute('class', 'image-box');
              imgBox.innerHTML = img;
              trackName.textContent = item.title;
              //append child
              searchForm.appendChild(trackCont);
              trackCont.appendChild(imgBox);
              trackCont.appendChild(trackName);
              //fetch stream_url
              if (item.artwork_url !== null) {
                img = '<img src="' + item.artwork_url + '">';
              }
          });
        });
    });
  });

  fetch('https://api.soundcloud.com/tracks/306427043/stream?client_id=' + TOKEN).then(function (result) {
    // result.json().then(function (data2) {
      console.log(result);
    // });
  });



}());
