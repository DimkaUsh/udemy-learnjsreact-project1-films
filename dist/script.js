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

    if (nameMovies === null || nameMovies === 'Название' || nameMovies.length > 50) {
        i -- ;
        continue2
    };
    
    personalMovieDB.movies[nameMovies] = gradeMovies;
}

personalMovieDB.count < 10 ? alert('Просмотрено довольно мало фильмов') :
personalMovieDB.count > 10 && personalMovieDB < 30 ? alert('Вы классический зритель') :
personalMovieDB.count > 30 ? alert('Вы киноман') : 
alert('Произошла ошибка')

console.log(personalMovieDB)