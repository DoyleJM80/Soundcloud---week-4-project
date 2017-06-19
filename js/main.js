

(function () {
  'use strict';

  // var myHeaders = {
  //   Authorization: 'token ' + TOKEN
  // };

  // try {
  //   myHeaders['Authorization'] = 'token ' + TOKEN;
  // } catch (e) {
  //   //ignore error
  // }


  var img = '<img src="https://s-media-cache-ak0.pinimg.com/originals/68/f2/9a/68f29a5da65ace8159029d7473594b14.jpg">';
  // urls
  var userInput = '';
  var searchUrl = 'https://api.soundcloud.com/tracks/?client_id=' + TOKEN + '&q=';
  // get-elements
  var searchForm = document.getElementById('search-form');
  var searchResults = document.getElementById('search-results');
  var newTitle = document.getElementById('new-title');
  var newImg = '';
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
                newTitle.textContent = item.title;
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
    });
  });
  function fetchStream(url) {
    fetch(url + '?client_id=' + TOKEN).then(function (result) {
      var musicPlayer = document.getElementById('music-player');
      musicPlayer.src = result.url;
    });
  }
}());
