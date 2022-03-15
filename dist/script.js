const personalMovieDB = {
    count: null,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start : function() {

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', 'Число');
        }
    },

    rememberMyFilms : function() {

        for (let i = 0; i < 2; i++){

            let nameMovies = prompt('Один из последних просмотренных фильмов?', 'Название');
            let gradeMovies = prompt('На сколько оцените его?', 'Оценка');
        
            if (nameMovies === null || nameMovies === 'Название' || nameMovies.length > 50) {
                i -- ;
                continue2
            };
            
            personalMovieDB.movies[nameMovies] = gradeMovies;
        }
    },

    detectPersonalLevel : function() {
        console.log(personalMovieDB.count)
        personalMovieDB.count <= 10 ? alert('Просмотрено довольно мало фильмов') :
        personalMovieDB.count > 10 && personalMovieDB.count <= 30 ? alert('Вы классический зритель') :
        personalMovieDB.count > 30 ? alert('Вы киноман') : 
        alert('Произошла ошибка')
    },

    showMyDB : function() {

        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB)
        }
    },

    writeYourGenres : () => {

        let genre = null;

        for (let i = 1; i < 4; i++) {
    
            genre = prompt(`Ваш любимый жанр под номером ${i}`);
            
            if (genre === '' || genre == null || !isNaN(genre)) {
                i--;
                continue
            };
    
            personalMovieDB.genres[i - 1] = genre
        }

        personalMovieDB.genres.forEach((element, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${element}`)
        })
    },

}

// personalMovieDB.start()
// personalMovieDB.rememberMyFilms()
// personalMovieDB.detectPersonalLevel()
// personalMovieDB.writeYourGenres()
// personalMovieDB.showMyDB()


