// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
    let result = array.map(e => e.director);

    console.log("EXERCICE 1 ->", result);
    return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

    let result = array.filter(e => e.director == director);

    console.log("EXERCICE 2 ->", result);
    return result;

}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

    let movies = getMoviesFromDirector(array, director).filter(e => e.score),
        result = Number((movies.reduce((sum, e) => sum + Number(e.score), 0) / movies.length).toFixed(2));

    console.log("EXERCICE 3 ->", result);
    return result;

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

    let result = array.map(e => e.title).sort((a, b) => a.localeCompare(b));

    console.log("EXERCICE 4 ->", result);
    return result.filter((e, i) => i < 20);

}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

    let result = [...array].sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));

    console.log("EXERCICE 5 ->", result);

    return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {

    let categoryArray = array.filter(e => (e.genre || []).includes(category) && e.score),

        result = Number((categoryArray.reduce((sum, e) => sum + Number(e.score), 0) / (categoryArray.length || 1)).toFixed(2));

    console.log("EXERCICE 6 ->", result);

    return result;

}



// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

    let hoursToMinutes, minutes, result = [...array].map(e => {

        hoursToMinutes = (Number(e.duration.substring(0, e.duration.indexOf("h"))) || 0) * 60;
        minutes = Number(e.duration.substring(e.duration.indexOf("h") + 1, e.duration.indexOf("m")).trim()) || 0;

        return {...e, duration: hoursToMinutes + minutes };
    });

    console.log("EXERCICE 7 ->", result);
    return result;

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

    let result = array.filter(e => e.year == year);

    result = result.reduce((prev, next) => prev.score > next.score ? prev : next, { score: 0 });

    console.log("EXERCICE 8 ->", result);
    return [result];

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = {
        getAllDirectors,
        getMoviesFromDirector,
        moviesAverageOfDirector,
        orderAlphabetically,
        orderByYear,
        moviesAverageByCategory,
        hoursToMinutes,
        bestFilmOfYear,
    };
}