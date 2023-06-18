const movieSearch = document.getElementById('movie-search-box');
const searchList = document.getElementById('list');
const resultGrid = document.getElementById('result-grid');

async function loadMovies(searchTerm){
	const URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=82070e20';
	const res= await fetch('${URL}');
	const data = await res.json();
        if(data.Response == 'True')
			displayList(data.Search);
}
function findMovies(){
  let searchTerm = (movieSearch.value).trim();
	if(searchTerm.length > 0){
		searchList.classList.remove('hide-search-list');
      loadMovies(searchTerm);
	}
	else{
		searchList.classList.add('hide-search-list');
	}
}
function displayMovieList(movies){
	searchList.innerHTML = "";
	for(let i=0;i<movies.length;i++){
		let movieList = document.createElement('div');
		console.log(movieListItem);
	}
}
