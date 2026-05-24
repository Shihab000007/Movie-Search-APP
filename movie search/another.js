const searchBtn = document.getElementById("search-btn")
const searchInput = document.getElementById("search-input")
const moviesContainer = document.querySelector(".movies-container")
searchBtn.addEventListener("click", () => {
    searchMovies()
})

function searchMovies() {
    const movieName = searchInput.value.trim()

    if (movieName === "") {
        moviesContainer.innerHTML = "<h2> Please enter a movie name </h2>"
        return
    }
    moviesContainer.innerHTML = "<h2> loading movie....</h2>"
    fetch("https://imdb.iamidiotareyoutoo.com/search?q=" + movieName)
        .then(function (response) {
            return response.json()
        }).then(function (data) {

            // console.log(data)

            moviesContainer.innerHTML = ""
            data.description.forEach(function (movie) {
                moviesContainer.innerHTML += `<div>
                <img src="${movie['#IMG_POSTER']}" width = "200" >
                <h3 style="color:red">${movie['#TITLE']}</h3>
                <h4>${movie['#ACTORS']}</h4>
                <h5 style="color:#808080">${movie['#YEAR']}</h5>
                </div>
                `
            })

        })

}
