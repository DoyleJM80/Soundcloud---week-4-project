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
  var img = '<img src="https://s-media-cache-ak0.pinimg.com/originals/68/f2/9a/68f29a5da65ace8159029d7473594b14.jpg">';
  // urls
  var userInput = '';
  var searchUrl = 'http://api.soundcloud.com/tracks/?client_id=' + TOKEN + '&q=';
  // get-elements
  var searchForm = document.getElementById('search-form');
  var searchResults = document.getElementById('search-results');
  var newImg = 'bob';
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
              var trackName = document.createElement('span');
              // set attributes
              trackCont.setAttribute('class', 'track-box');
              imgBox.setAttribute('class', 'image-box');
              trackName.setAttribute('class', 'track-name');
              imgBox.innerHTML = img;
              imgBox.addEventListener('click', function () {
                fetchStream(imgBox.dataset.stream);
              });
              imgBox.dataset.stream = item.stream_url;
              imgBox.dataset.art = item.artwork_url;
              trackName.textContent = item.title;
              //append child
              searchResults.prepend(trackCont);
              trackCont.appendChild(imgBox);
              trackCont.appendChild(trackName);
          });
        });
        // .then(fetch(item.artwork_url + '?client_id=' + TOKEN).then(function (result2) {
        //   var imgArt = document.getElementById('image-box');
        //   newImg = result2.url;
        //   imgArt.src = newImg;
        // }));
    });
  });
  function fetchStream(url) {
    fetch(url + '?client_id=' + TOKEN).then(function (result) {
      var musicPlayer = document.getElementById('music-player');
      musicPlayer.src = result.url;
    });
  }
}());
