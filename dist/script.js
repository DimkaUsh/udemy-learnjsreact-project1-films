'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'Число');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

for (let i = 0; i < 2; i++){

    let nameMovies = prompt('Один из последних просмотренных фильмов?', 'Название');
    let gradeMovies = prompt('На сколько оцените его?', 'Оценка');

    personalMovieDB.movies[nameMovies] = gradeMovies
}

console.log(personalMovieDB)