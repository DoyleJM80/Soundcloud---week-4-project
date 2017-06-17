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

  var searchUrl = 'http://api.soundcloud.com/tracks/13158665?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f';

  // get-elements
  var searchForm = document.getElementById('search-form');

  // onSubmit

  // searchForm.on('submit' )


  // function musicSearch() {
    fetch(searchUrl).then(function (res) {
        res.json().then(function (data) {
            var trackCont = document.createElement('div');
            var trackName = document.createElement('span');
            trackName.textContent = data.title;
            console.log(trackName);
            searchForm.appendChild(trackCont);
            trackCont.appendChild(trackName);
      });
    });



}());
