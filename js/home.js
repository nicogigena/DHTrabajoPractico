window.onload = function(){
  //APIKey = 515c73c060475afdc6d4bfe35f81b7e3

  var queryString = location.search
  var queryStringObj = new URLSearchParams(queryString);



  fetch('https://api.themoviedb.org/3/search/movie?api_key=515c73c060475afdc6d4bfe35f81b7e3&language=en_US&query=' + queryStringObj.get("buscador") + '&include_adult=false')
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          console.log('data = ', data);
      })
      .catch(function(err) {
          console.error(err);
      });





}
