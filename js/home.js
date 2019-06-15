window.onload = function(){
    //APIKey = 515c73c060475afdc6d4bfe35f81b7e3
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

  var queryString = location.search
  var queryStringObj = new URLSearchParams(queryString);




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








}
