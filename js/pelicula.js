window.onload = function(){
    //APIKey = 515c73c060475afdc6d4bfe35f81b7e3

  var queryString = location.search
  var queryStringObj = new URLSearchParams(queryString);
  // console.log(queryStringObj);
  // console.log(queryString);
  // console.log(queryStringObj.get("nombre"));
  // console.log(localStorage.getItem("nombre"));
  // console.log(queryStringObj.get("nombre"));
  // console.log(localStorage);
  if (localStorage.getItem("nombre")=="null") {
    if (queryStringObj.get("nombre")==null) {
      document.querySelector("div.bienvenido").style.display="none";
      document.querySelector("div.logo").style.width="20%";
      // console.log("null null");
    } else {
      localStorage.setItem("nombre", queryStringObj.get("nombre"))
      // console.log(localStorage.setItem("nombre"));
      document.querySelector("div.bienvenido div.usuario").innerText=localStorage.getItem("nombre");
      console.log("null form");
    }
  } else{
    document.querySelector("div.bienvenido div.usuario").innerText=localStorage.getItem("nombre");
    // console.log(localStorage.getItem("nombre"));
    // console.log("local true");
  }

  // console.log(localStorage.getItem("nombre"));

  localStorage.setItem("nombre", queryStringObj.get("nombre"))
  // console.log(localStorage.getItem("nombre"));

  //
  // fetch('https://api.themoviedb.org/3/search/movie?api_key=515c73c060475afdc6d4bfe35f81b7e3&language=en_US&query=' + queryStringObj.get("buscador") + '&include_adult=false')
  //     .then(function(response) {
  //         return response.json();
  //     })
  //     .then(function(data) {
  //         console.log('data = ', data);
  //     })
  //     .catch(function(err) {
  //         console.error(err);
  //     });

  fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=515c73c060475afdc6d4bfe35f81b7e3&language=es-AR')
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          // console.log('data = ', data);
          var generos = data.genres
          // console.log(generos);
          for (var i = 0; i < generos.length; i++) {
            // console.log(generos[i].name);
            document.querySelector(".generos ul").innerHTML += "<li><button type='button' name='button' class='btn w-100'>" + generos[i].name + "</button></li>"
          }
      })
      .catch(function(err) {
          console.error(err);
      });
  var queryGeneros = document.querySelector("section.generos")
  var queryGenBtn = document.querySelector("div.gen-btn")
  var queryContainer = document.querySelector(".container");

  queryGenBtn.addEventListener("click",function(){
      queryGeneros.classList.toggle("w-15")
      queryGeneros.classList.toggle("w-0")
      queryGenBtn.classList.toggle("r-15")
      queryGenBtn.classList.toggle("r-0")
      document.querySelector(".open").classList.toggle("display-none")
      document.querySelector(".open").classList.toggle("display-block")
      document.querySelector(".close").classList.toggle("display-none")
      document.querySelector(".close").classList.toggle("display-block")
    })
  queryLogin=document.querySelector("header nav div.navbar ul.nav li div.login")
  queryLoginLi=document.querySelector(".aLogin")
  queryLoginLi.addEventListener("click",function(){
    queryLogin.classList.toggle("display-block")
    queryLogin.classList.toggle("display-none")
  })
  var core = document.querySelector("section.core")
  console.log(core);
  // fetch('https://api.themoviedb.org/3/movie/' + queryStringObj.get("id") + '?api_key=515c73c060475afdc6d4bfe35f81b7e3&language=es-AR')
  //     .then(function(response) {
  //         return response.json();
  //     })
  //     .then(function(data) {
  //       console.log(data);
  //       console.log(data.title);
  //       // https://image.tmdb.org/t/p/original/
  //       document.querySelector("section.core div.imagen").innerHTML = "<img src=https://image.tmdb.org/t/p/original/" + data.poster_path + " alt=" + data.title + ">"
  //
  //     })
  //     .catch(function(err) {
  //         console.error(err);
  //     });
//https://api.themoviedb.org/3/movie/238?api_key=515c73c060475afdc6d4bfe35f81b7e3&language=es-AR





}
