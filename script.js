function searchMovies(){

let input = document.getElementById("searchInput").value.toLowerCase();

let cards = document.querySelectorAll(".movie-card");

cards.forEach(function(card){

let title = card.innerText.toLowerCase();

if(title.includes(input))
card.style.display="block";
else
card.style.display="none";

});

}
