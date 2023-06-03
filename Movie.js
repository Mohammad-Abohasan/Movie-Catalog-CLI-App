class Movie {
    constructor(id, title = "", year = "", genre = "", duration = "", director = "", votes = "") {
        this.id = id;
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.duration = duration;
        this.director = director;
        this.votes = votes;
    }
}

Movie.prototype.print =  function () {
    console.log(`
***
  Movie id: ${this.id}
  Movie title: ${this.title}
  Movie year: ${this.year}
  Movie genre: ${this.genre}
  Movie duration: ${this.duration}
  Movie director: ${this.director}
  Movie votes: ${this.votes}
***`);
}

export default Movie;