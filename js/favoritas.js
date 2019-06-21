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

  // console.log(queryStringObj.get("nombre"));
  if (localStorage.getItem("nombre")=="null") {
    if (queryStringObj.get("nombre")==null) {
      document.querySelector("div.bienvenido").style.display="none";
      document.querySelector("div.logo").style.width="20%";
    } else{
      localStorage.setItem("nombre", queryStringObj.get("nombre"))
      document.querySelector("div.bienvenido div.usuario").innerText=localStorage.getItem("nombre");
    }
  } else{
    if (queryStringObj.get("nombre")!=null) {
      localStorage.setItem("nombre", queryStringObj.get("nombre"))
      document.querySelector("div.bienvenido div.usuario").innerText=localStorage.getItem("nombre");
    } else {
      document.querySelector("div.bienvenido div.usuario").innerText=localStorage.getItem("nombre");
    }
  }

  fetch('https://api.themoviedb.org/3/movie/popular?api_key=515c73c060475afdc6d4bfe35f81b7e3&language=es-AR&page=' + Math.ceil(Math.random()*100 + 1))
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          // console.log('data = ', data);
          data = data.results
          var numAlAzar = Math.ceil(Math.random()*19 + 1)
          console.log("numAlAzar: " + numAlAzar);
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
        console.log(generos);
        for (var i = 0; i < generos.length; i++) {
          // console.log(generos[i].name);
          var name = generos[i].name
          var id = generos[i].id
          document.querySelector(".generos ul").innerHTML += "<li><button type='button' name='button' class='btn w-100' idGen=" + id + ">" + name + "</button></li>"
        }
        var genBtn = document.querySelectorAll(".generos ul li button")

        for (var i = 0; i < generos.length; i++) {
          genQuery = genBtn[i]
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
  queryLogin=document.querySelector("header nav div.navbar ul.nav li div.login")
  queryLoginLi=document.querySelector(".aLogin")
  queryLoginLi.addEventListener("click",function(){
    queryLogin.classList.toggle("display-block")
    queryLogin.classList.toggle("display-none")
  })

  // var page = queryStringObj.get("page")
  // for (var i = 1; i < 11; i++) {
  //   // console.log(i);
  //   document.querySelector("div.page ul").innerHTML += "<li><button type='button' name='button' page=" + i + ">" + i + "</button></li>"
  //
  // }
  // var pageBtn = document.querySelectorAll("div.page ul li button")
  // for (var i = 0; i < 10; i++) {
  //     pageQuery = pageBtn[i]
  //     pageQuery.addEventListener("click",function(){
  //       window.location.href="generos.html?idGen=" + queryStringObj.get("idGen") + "&page=" + this.getAttribute("page")
  //     })
  //
  //   }

  if (favoritos.length>0) {
    for (var i = 0; i < favoritos.length; i++) {
      var pelicula = favoritos[i]
      console.log(pelicula);
      fetch('https://api.themoviedb.org/3/movie/' + pelicula + '?api_key=515c73c060475afdc6d4bfe35f81b7e3&language=es-AR')
          .then(function(response) {
              return response.json();
          })
          .then(function(data) {
              console.log('data = ', data);
              var pelicula = data
              document.querySelector("section.core ul").innerHTML += "<li><div class='imagen'><a href=pelicula.html?id=" + pelicula.id + "><img src=https://image.tmdb.org/t/p/original/" + pelicula.poster_path + " alt=''></a><h1>" + pelicula.title + "</h1></div></li>"


          })
          .catch(function(err) {
              console.error(err);
          });
    }
  }else{
    document.querySelector("section.core").innerHTML = "<h1>Debes elegir películas que quieras dentro de tu lista de favoritos!</h1>" + '<iframe src="https://giphy.com/embed/mGJaDzk2QfZG6qgAKW" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bigbrother-big-brother-david-bb21-mGJaDzk2QfZG6qgAKW">via GIPHY</a></p>'
  }




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

}
