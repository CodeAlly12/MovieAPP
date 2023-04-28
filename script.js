let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");

let result = document.getElementById("result");
let historyListEl =document.querySelector(".historyList");

 let historyList = []



let getMovie = () => {
  let movieName = movieNameRef.value;
  let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
  if (movieName.length<= 0){
    result.innerHTML =`<h3 class="msg">
    </h3>`;
  }

  else {
    fetch (url).then ((resp)  => resp.json())
    .then ((data)=>{


      if (data.Response == "True") {
        result.innerHTML = `
           <div class="info">
              <img src=${data.Poster} class="Poster">
              <div>
              <h2>${data.Title}</h2>
              </div>
              <div class = "details">
              </div>
              <div class = "genre">
              <div>${data.Genre.split(",").join("<div></div>")}</div>
              </div>
           </div>
           <h3>Plot:</h3>
           <p>${data.Plot}</p>
           <h3>Cast:</h3>
           <p>${data.Actors}</p>
           <h3>Runtime:</h3>
           <p>${data.Runtime}</p>
           <h3> Ratings:</h3>
           <p>${data.imdbRating}</p>
           

      `;}
    else { 
        result.innerHTML = `<h3 class='msg'>${data.Error}</h3>`;
      }
      
    })
    .catch(() => {
      result.innerHTML = `<h3 class="msg">Title not found</h3>`;
    });
    
  }  




};
 
searchBtn.addEventListener("click", getMovie);
window.addEventListener("load",getMovie)







// $(function() {

// 	// Display a bit on the LED display
// 	function setBit(bit, on) {
// 		if (on) {
// 			$("#bit" + bit).css("background-color", "pink");		
// 		} else {
// 			$("#bit" + bit).css("background-color", "blue");		
// 		}
// 	}

// 	// Display a byte on the LED display
// 	function displayChar(ch) {
// 		// console.log("Key: " + String.fromCharCode(ch) + "[" + ch + "]");
// 		setBit(7, (ch & 0x80) > 0)
// 		setBit(6, (ch & 0x40) > 0)
// 		setBit(5, (ch & 0x20) > 0)
// 		setBit(4, (ch & 0x10) > 0)
// 		setBit(3, (ch & 0x08) > 0)
// 		setBit(2, (ch & 0x04) > 0)
// 		setBit(1, (ch & 0x02) > 0)
// 		setBit(0, (ch & 0x01) > 0)
// 	}

// 	// Clears the display back to grey
// 	function clearDisplay() {
// 		$(".bitbtn").css("background-color", "black");		
// 	}

// 	// Animate the string into the LED display
// 	$("#go").click(function() {

// 		var pos = 0;
// 		var msg = $("#keyboard").val();
// 		clearDisplay();
// 		if (msg.length == 0) return;
// 		var interval = setInterval(function() {
// 			var ch = msg.charCodeAt(pos);
// 			if (pos++ >= msg.length) {
// 				clearInterval(interval);
// 				clearDisplay();
// 			} else {
// 				displayChar(ch);
// 			}
// 		}, 1000)

// 		return false;
// 	});

// })