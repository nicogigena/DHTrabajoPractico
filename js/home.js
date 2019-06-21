window.onload = function(){
    //APIKey = 515c73c060475afdc6d4bfe35f81b7e3
  var queryGeneros = document.querySelector("section.generos")
  var queryGenBtn = document.querySelector("div.gen-btn")
  var queryContainer = document.querySelector(".container");


  var querySpan = document.querySelector("#span button")
  querySpan.addEventListener("click",function(){
    document.querySelector("header nav div.relleno").classList.toggle("top-0")
    document.querySelector("header nav div.relleno").classList.toggle("bottom-100")
    document.querySelector("header").classList.toggle("h-443px")
    document.querySelector("header nav").classList.toggle("h-443px")
  })

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
  var queryString = location.search
  var queryStringObj = new URLSearchParams(queryString);
  // console.log(queryStringObj);
  // console.log(queryString);
  // console.log(queryStringObj.get("nombre"));
  if (localStorage.getItem("nombre")=="null") {
    if (queryStringObj.get("nombre")==null) {
      document.querySelector("div.bienvenido").style.display="none";
      document.querySelector("div.logo").style.width="20%";
      console.log(localStorage);
    } else{
      localStorage.setItem("nombre", queryStringObj.get("nombre"))
      document.querySelector("div.bienvenido div.usuario").innerText=localStorage.getItem("nombre");
      console.log(localStorage);
    }
  } else{
    if (queryStringObj.get("nombre")!=null) {
      localStorage.setItem("nombre", queryStringObj.get("nombre"))
      document.querySelector("div.bienvenido div.usuario").innerText=localStorage.getItem("nombre");
    } else {
      document.querySelector("div.bienvenido div.usuario").innerText=localStorage.getItem("nombre");
    }

  }
    // Peli Al Azar
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=515c73c060475afdc6d4bfe35f81b7e3&language=es-AR&page=' + Math.ceil(Math.random()*100 + 1))
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // console.log('data = ', data);
            data = data.results
            var numAlAzar = Math.ceil(Math.random()*19 + 1)
            // console.log(numAlAzar);
            document.querySelector("nav ul li a.aRandom").setAttribute("href", "pelicula.html?id="+ data[numAlAzar].id)
        })
        .catch(function(err) {
            console.error(err);
        });



    //MAS VALORADAS
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=515c73c060475afdc6d4bfe35f81b7e3&language=es-AR&page=1&region=US')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // console.log('data = ', data);
            var results = data.results

            for (var i = 0; i < 10; i++) {
              var valoUl = document.querySelector("section.valoradas div.lista-banner ul")
              if (i==0) {
                valoUl.innerHTML = "<li><button type='button' ord='1' name='button' class='inactive active' data-id=" + results[i].id + " data-poster=" + results[i].poster_path + ">" + results[i].title + "</button></li>"
              }else{
                var imasuno = i+1
                valoUl.innerHTML += "<li><button type='button' ord=" + imasuno + " name='button' class='inactive' data-id=" + results[i].id + " data-poster=" + results[i].poster_path + ">" + results[i].title + "</button></li>"
              }
            }//lista


            var valoInactive=document.querySelectorAll("section.valoradas div.lista-banner button.inactive")
            var valoActive=document.querySelector("section.valoradas div.lista-banner button.active")

            document.querySelector("section.valoradas div.banner").innerHTML = "<img src=https://image.tmdb.org/t/p/original/" + results[0].poster_path + ">"
            document.querySelector("section.valoradas div.banner").innerHTML += "<div class='img-banner'><a href=pelicula.html?id=" + results[0].id + ">VER MAS</a></div>"

            for (var i = 0; i < valoInactive.length; i++) {
              valoInactive[i].addEventListener("click",function (){

                document.querySelector("section.valoradas div.lista-banner button.active").classList.add("inactive");
                document.querySelector("section.valoradas div.lista-banner button.active").classList.remove("active");
                this.classList.add("active");
                this.classList.remove("inactive");

                var poster = this.getAttribute("data-poster");
                var id = this.getAttribute("data-id");
                document.querySelector("section.valoradas div.banner").classList.remove("opacity1")
                document.querySelector("section.valoradas div.banner").classList.add("opacity0");

                setTimeout(function(){
                  document.querySelector("section.valoradas div.banner img").setAttribute("src", "https://image.tmdb.org/t/p/original/" + poster);
                  document.querySelector("section.valoradas div.banner div.img-banner a").setAttribute("href", "pelicula.html?id=" + id)
                  setTimeout(function(){
                    document.querySelector("section.valoradas div.banner").classList.toggle("opacity0")
                    document.querySelector("section.valoradas div.banner").classList.toggle("opacity1")
                  },100)
                },500)

                var valoInactive=document.querySelectorAll("section.valoradas div.lista-banner button.inactive")
                var valoActive=document.querySelectorAll("section.valoradas div.lista-banner button.active")

              })
            }
        })
        .catch(function(err) {
            console.error(err);
        });
    //UPCOMING
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=515c73c060475afdc6d4bfe35f81b7e3&language=es-AR&page=1&region=US')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // console.log('data = ', data);
            var results = data.results

            for (var i = 0; i < 10; i++) {
              var proxUl = document.querySelector("section.proximas div.lista-banner ul")
              if (i==0) {
                proxUl.innerHTML = "<li><button type='button' name='button' class='inactive active' data-id=" + results[i].id + " data-poster=" + results[i].poster_path + ">" + results[i].title + "</button></li>"
              }else{
                proxUl.innerHTML += "<li><button type='button' name='button' class='inactive' data-id=" + results[i].id + " data-poster=" + results[i].poster_path + ">" + results[i].title + "</button></li>"
              }
            }//lista


            var proxInactive=document.querySelectorAll("section.proximas div.lista-banner button.inactive")
            var proxActive=document.querySelector("section.proximas div.lista-banner button.active")

            document.querySelector("section.proximas div.banner").innerHTML = "<img src=https://image.tmdb.org/t/p/original/" + results[0].poster_path + ">"
            document.querySelector("section.proximas div.banner").innerHTML += "<div class='img-banner'><a href=pelicula.html?id=" + results[0].id + ">VER MAS</a></div>"

            for (var i = 0; i < proxInactive.length; i++) {
              proxInactive[i].addEventListener("click",function (){

                document.querySelector("section.proximas div.lista-banner button.active").classList.add("inactive");
                document.querySelector("section.proximas div.lista-banner button.active").classList.remove("active");
                this.classList.add("active");
                this.classList.remove("inactive");

                var poster = this.getAttribute("data-poster");
                var id = this.getAttribute("data-id");
                document.querySelector("section.proximas div.banner").classList.remove("opacity1")
                document.querySelector("section.proximas div.banner").classList.add("opacity0");

                setTimeout(function(){
                  document.querySelector("section.proximas div.banner img").setAttribute("src", "https://image.tmdb.org/t/p/original/" + poster);
                  document.querySelector("section.proximas div.banner div.img-banner a").setAttribute("href", "pelicula.html?id=" + id)
                  setTimeout(function(){
                    document.querySelector("section.proximas div.banner").classList.toggle("opacity0")
                    document.querySelector("section.proximas div.banner").classList.toggle("opacity1")
                  },100)
                },500)

                var valoInactive=document.querySelectorAll("section.proximas div.lista-banner button.inactive")
                var valoActive=document.querySelectorAll("section.valoradas div.lista-banner button.active")

              })
            }
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

      fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=515c73c060475afdc6d4bfe35f81b7e3&language=es-AR')
          .then(function(response) {
              return response.json();
          })
          .then(function(data) {
              // console.log('data = ', data);
              var pelis = data.results
              // console.log(pelis);
              for (var i = 0; i < 5; i++) {
                if (i==0) {
                  document.querySelector("ol.carousel-indicators").innerHTML = "<li data-target='#myCarousel' data-slide-to='0' class='active'></li>"
                  document.querySelector("div.carousel-inner").innerHTML = "<div class='item active'><img class='d-block w-100' src=https://image.tmdb.org/t/p/original/" + pelis[i].backdrop_path + "><div class='item-text'><h2>" + pelis[i].title + "</h2><a href=pelicula.html?id=" + pelis[i].id + ">(+ VER MAS)</a><div>" + pelis[i].overview + "</div><div class='carousel-caption'></div></div>"
                }
                if (i>=1) {
                  document.querySelector("ol.carousel-indicators").innerHTML += "<li data-target='#myCarousel' data-slide-to=" + i + "></li>"
                  document.querySelector("div.carousel-inner").innerHTML += "<div class='item'><img class='d-block w-100' src=https://image.tmdb.org/t/p/original/" + pelis[i].backdrop_path + "><div class='item-text'><h2>" + pelis[i].title + "</h2><a href=pelicula.html?id=" + pelis[i].id + ">(+ VER MAS)</a><div>" + pelis[i].overview + "</div><div class='carousel-caption'></div></div>"
                }

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







}
