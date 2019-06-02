window.onload = function(){
  //APIKey = 515c73c060475afdc6d4bfe35f81b7e3

  var queryGeneros = document.querySelector("section.generos")
  var queryGenerosBtn = document.querySelector("section.generos div.btn")
  var queryContainer = document.querySelector(".container")
    queryGenerosBtn.addEventListener("click",function(event){
      queryGeneros.classList.toggle("w-0")
      queryContainer.classList.toggle("w-100")
      document.querySelector("header nav").classList.toggle("w-100")
    })




  // queryGenerosBtn.addEventListener("click",function(this){
  //   document.querySelector("section.generos").style.width = "0%";
  //   console.log(queryGeneros);
  //
  //
  //
  //
  //
  // })
  //



  //
  //
  // var queryString = location.search
  // var queryStringObj = new URLSearchParams(queryString);
  //
  //
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
  //
  //
  //


}
