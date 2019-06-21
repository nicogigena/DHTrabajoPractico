window.onload = function(){
    //APIKey = 515c73c060475afdc6d4bfe35f81b7e3
  var queryString = location.search
  var queryStringObj = new URLSearchParams(queryString);
  var json = localStorage.getItem("favs")
  if (json != null) {
  // Desempaquetar el string JSON
  var objLit = JSON.parse(json)

  // De todo el objeto literal me interesa EL ARRAY
  var favoritos = objLit.carac

  } else {
    // Si no habia creo el listado como VACIO
    var favoritos = []
  }
  var querySpan = document.querySelector("#span button")
  querySpan.addEventListener("click",function(){
    document.querySelector("header nav div.relleno").classList.toggle("top-0")
    document.querySelector("header nav div.relleno").classList.toggle("bottom-100")
    document.querySelector("header").classList.toggle("h-443px")
    document.querySelector("header nav").classList.toggle("h-443px")
  })

  //LOGIN LOCAL STORAGE
    var loginA = document.querySelector("#login a");
    var logonLi = document.querySelector("#login");
    document.querySelector("#login form").addEventListener("submit",function(event){
      var nombre = document.querySelector("#nombre").value;
      localStorage.setItem("nombre", nombre);
    })
    console.log(localStorage.getItem("nombre"));

    if (localStorage.getItem("nombre")=="" || localStorage.getItem("null")) {
      localStorage.removeItem("nombre")
    }
    if (localStorage.getItem("nombre")==null) {
      document.querySelector("div.bienvenido").style.display="none";
      document.querySelector("div.logo").style.width="20%";
      document.querySelector("#favli").style.display="none";
      queryLogin=document.querySelector("header nav div.navbar ul.nav li div.login")
      document.querySelector("#login a").addEventListener("click",function(){
        queryLogin.classList.toggle("display-block")
        queryLogin.classList.toggle("display-none")
      })
    } else{
      loginA.innerHTML="LOGOUT"
      document.querySelector("div.usuario").innerText = localStorage.getItem("nombre")
      document.querySelector("#login a").addEventListener("click",function(){
        localStorage.removeItem("nombre")
        window.location.href="home.html"

      })
    }
    document.querySelector("#logout").style.display="none"
  // console.log(localStorage);
  // localStorage.removeItem("idMovie")
  // console.log(localStorage.getItem("idMovie"));
  // document.querySelector("div.login form").addEventListener("submit", function(event){
  //   localStorage.setItem("idMovie", queryStringObj.get("id"))
  // })
  fetch('https://api.themoviedb.org/3/movie/popular?api_key=515c73c060475afdc6d4bfe35f81b7e3&language=es-AR&page=' + Math.ceil(Math.random()*100 + 1))
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          console.log('data = ', data);
          data = data.results
          var numAlAzar = Math.ceil(Math.random()*19 + 1)
          console.log(numAlAzar);
          document.querySelector("nav ul li a.aRandom").setAttribute("href", "pelicula.html?id="+ data[numAlAzar].id)
      })
      .catch(function(err) {
          console.error(err);
      });

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
          var name = generos[i].name
          var id = generos[i].id
          document.querySelector(".generos ul").innerHTML += "<li><button type='button' name='button' class='btn w-100' idGen=" + id + ">" + name + "</button></li>"
        }
        var genBtn = document.querySelectorAll(".generos ul li button")

        for (var i = 0; i < generos.length; i++) {
          genQuery = genBtn[i]
          genId = generos[i].id
          genQuery.addEventListener("click",function(){
            window.location.href="generos.html?idGen=" + this.getAttribute("idGen")
          })
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

  var core = document.querySelector("section.core")

  fetch('https://api.themoviedb.org/3/movie/' + queryStringObj.get("id") + '?api_key=515c73c060475afdc6d4bfe35f81b7e3&language=es-AR')
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
        console.log(data);
        // console.log(data.title);
        // https://image.tmdb.org/t/p/original/
        document.querySelector("section.core div.imagen").innerHTML = "<img src=https://image.tmdb.org/t/p/original/" + data.poster_path + " alt=" + data.title + ">"

        var titulo = document.querySelector("section.core div.descripcion h2")
        titulo.innerHTML = data.title + "<button type='button' name='fav' idFav=" + data.id + "><img src=''></button"
        var idFav = document.querySelector("section.core div.descripcion h2 button").getAttribute("idFav")
        if (favoritos.indexOf(idFav) == -1) {
          document.querySelector("section.core div.descripcion h2 img").setAttribute("src", "imagenes/estrellaOff.png")
        } else {
          document.querySelector("section.core div.descripcion h2 img").setAttribute("src", "imagenes/estrellaOn.png")
        }


        document.querySelector("section.core div.descripcion h2 button").addEventListener("click", function(){
          var idFav = this.getAttribute("idFav")
          if (favoritos.indexOf(idFav) == -1 ) {
            favoritos.push(idFav)
            document.querySelector("section.core div.descripcion h2 img").setAttribute("src", "imagenes/estrellaOn.png")
          } else{
            var posicion = favoritos.indexOf(idFav)
            favoritos.splice(posicion, 1);
            document.querySelector("section.core div.descripcion h2 img").setAttribute("src", "imagenes/estrellaOff.png")
          }
          obj = {
            carac: favoritos
          }
          json = JSON.stringify(obj)
          localStorage.setItem("favs", json)
          // console.log(localStorage);

        })

        // console.log(data.genres.length);
        for (var i = 0; i < data.genres.length; i++) {
          var genero = data.genres[i].name
          var id = data.genres[i].id
          var length = data.genres.length
          if (i== 0) {
            document.querySelector("section.core div.descripcion div.gen").innerHTML = "<a href=generos.html?idGen=" + id + ">" + genero + "</a>" + ", "
          } else if (i<length-1){
            document.querySelector("section.core div.descripcion div.gen").innerHTML += "<a href=generos.html?idGen=" + id + ">" + genero + "</a>" + ", "
          } else {
            document.querySelector("section.core div.descripcion div.gen").innerHTML += "<a href=generos.html?idGen=" + id + ">" + genero + "</a>"
          }
        }
        document.querySelector("section.core div.descripcion div.media").innerText = data.vote_average + "/10"
        document.querySelector("section.core div.descripcion p").innerText = data.overview
        // document.querySelector(
      })
      .catch(function(err) {
          console.error(err);
      });


//SIMILARES
  fetch('https://api.themoviedb.org/3/movie/' + queryStringObj.get("id") + '/similar?api_key=515c73c060475afdc6d4bfe35f81b7e3&language=es-AR&page=1')
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
        console.log(data);
        data = data.results
        console.log(data);
        for (var i = 0; i < 10; i++) {
          var similar = data[i]
          var ulSimilar = document.querySelector("ul.uk-slider-items")
          // console.log(similar);
          ulSimilar.innerHTML += "<li><div class='uk-panel'><img src='https://image.tmdb.org/t/p/original/" + similar.backdrop_path + "' alt=''><div class='uk-position-center uk-panel'><h1><a href=pelicula.html?id=" + similar.id + ">" + similar.title + "</a></h1></div></div></li>"
        }
      })
      .catch(function(err) {
          console.error(err);
      });

      var formBtn = document.querySelector("nav div.form button.buscar")
      var formInput = document.querySelector("nav div.form input.buscar")
      console.log(formBtn);
      console.log(formInput);
      formBtn.addEventListener("click", function(event){
        if (formInput.value.length < 3) {
          alert("Mínimo 3 caracteres para realizar la búsqueda.")
          event.preventDefault();
        }
      })

//https://api.themoviedb.org/3/movie/238?api_key=515c73c060475afdc6d4bfe35f81b7e3&language=es-AR




}
