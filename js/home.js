window.onload = function(){
    //APIKey = 515c73c060475afdc6d4bfe35f81b7e3
    console.log(1);
  var queryGeneros = document.querySelector("section.generos")
  var queryGenBtn = document.querySelector("div.gen-btn")
  var queryContainer = document.querySelector(".container");

  queryGenBtn.addEventListener("click",function(){
      queryGeneros.classList.toggle("w-15")
      queryGeneros.classList.toggle("w-0")
      queryContainer.classList.toggle("w-85")
      queryContainer.classList.toggle("w-100")
      document.querySelector("header nav").classList.toggle("w-100")
      document.querySelector("header nav").classList.toggle("w-85")
      queryGenBtn.classList.toggle("r-15")
      queryGenBtn.classList.toggle("r-0")
      document.querySelector(".open").classList.toggle("display-none")
      document.querySelector(".open").classList.toggle("display-block")
      document.querySelector(".close").classList.toggle("display-none")
      document.querySelector(".close").classList.toggle("display-block")
      // document.querySelector("a").preventDefault()


    })




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

  fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=515c73c060475afdc6d4bfe35f81b7e3&language=es-AR')
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          console.log('data = ', data);
          var generos = data.genres
          console.log(generos);
          for (var i = 0; i < generos.length; i++) {
            console.log(generos[i].name);
            document.querySelector(".generos ul").innerHTML += "<li><button type='button' name='button' class='btn w-100'>" + generos[i].name + "</button></li>"

          }
      })
      .catch(function(err) {
          console.error(err);
      });




}
