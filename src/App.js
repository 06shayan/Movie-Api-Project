import './App.css';
import SearchIcon from './search.svg'
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
//fcaad3fd

const API_URL = 'https://www.omdbapi.com?apikey=fcaad3fd';
const movie1 = {
  "Title": "The Amazing Spiderman 2 Webb Cut",
  "Year": "2021",
  "imdbID": "tt18351128",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
}

const App = () => {
  
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([])

    const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
    
  useEffect(() => {
    searchMovies('spiderman')
  }, [])

  const top100Films = [
    '12 Angry Men', '2001: A Space Odyssey', 'A Clockwork Orange', 'A Few Good Men', 'A Star is Born', 'Airplane!', 'Alien', 'American Beauty', 
    'American History X', 'Annie Hall', 'Apocalypse Now', 'Back to the Future', 'Black Panther', 'Blade Runner', 'Blue Velvet', 'Braveheart', 
    'Brokeback Mountain', 'Casablanca', 'Chinatown', 'Citizen Kane', 'City of God', 'Cool Hand Luke', 'Das Boot', 'Dead Poets Society', 
    'Die Hard', 'Django Unchained', 'Do the Right Thing', 'Doctor Zhivago', 'Donnie Darko', 
    'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', 'E.T. the Extra-Terrestrial', 'Fargo', 'Forrest Gump', 'Gandhi', 
    'Gangs of New York', 'Gone with the Wind', 'Goodfellas', 'Gravity', 'Groundhog Day', 'High Noon', 'Inception', 
    'Indiana Jones and the Raiders of the Lost Ark', 'It Happened One Night', 'Jaws', 'Jurassic Park', 'Kill Bill: Vol. 1', 
    'Lawrence of Arabia', "Le fabuleux destin d'Amélie Poulain", 'Life is Beautiful', 'Lock, Stock and Two Smoking Barrels', 'M', 
    'Mad Max: Fury Road', 'Magnolia', 'Memento', 'Metropolis', 'Modern Times', 'Moonlight', 'Mulholland Drive', 'No Country for Old Men', 
    'North by Northwest', 'Notorious', 'On the Waterfront', 'Once Upon a Time in the West', "One Flew Over the Cuckoo's Nest", 'Out of Africa', 
    "Pan's Labyrinth", 'Pulp Fiction', 'Raging Bull', 'Rain Man', 'Rebel Without a Cause', 'Rocky', "Schindler's List", 'Se7en', 
    'Shawshank Redemption', "Singin' in the Rain", 'Some Like It Hot', 'Star Wars: Episode IV - A New Hope', 'Sunset Boulevard', 
    'Taxi Driver', 'The Apartment', 'The Big Lebowski', 'The Dark Knight', 'The Deer Hunter', 'The Godfather', 'The Graduate', 'The Green Mile', 
    'The Help', 'The Hurt Locker', "The King's Speech", 'The Lion King', 'The Maltese Falcon', 'The Matrix', 'The Prestige', 
    'The Silence of the Lambs', 'The Social Network', 'The Sting', 'The Truman Show', 'The Usual Suspects', 'The Wizard of Oz', 
    'There Will Be Blood', 'To Kill a Mockingbird', 'Titanic', 'Vertigo', 'Whiplash', "Who's Afraid of Virginia Woolf?", 'Wild Strawberries', 
    'Willy Wonka & the Chocolate Factory', 'Yojimbo', 'Young Frankenstein',"Aquaman", "Avengers: Age of Ultron", "Avengers: Endgame", 
    "Avengers: Infinity War", "Batman Begins", "Batman v Superman: Dawn of Justice", "Black Panther", "Blade", "Captain America: Civil War", 
    "Captain America: The First Avenger", "Captain America: The Winter Soldier", "Captain Marvel", "Catwoman", "Daredevil", "Deadpool", 
    "Doctor Strange", "Elektra", "Fantastic Four", "Ghostrider", "Green Lantern", "Guardians of the Galaxy", "Hellboy", "Hulk", 
    "Incredible Hulk", "Iron Man", "Iron Man 2", "Iron Man 3", "Joker", "Justice League", "Kick-Ass", "Man of Steel", "Spider-Man", 
    "Spider-Man 2", "Spider-Man 3", "Spider-Man: Far from Home", "Spider-Man: Homecoming", "Suicide Squad", "Superman Returns", 
    "Teenage Mutant Ninja Turtles", "The Amazing Spider-Man", "The Amazing Spider-Man 2", "The Avengers", "The Dark Knight", 
    "The Dark Knight Rises", "The Incredible Hulk", "The Punisher", "The Wolverine", "Thor", "Thor: Ragnarok", "Thor: The Dark World", 
    "Venom", "Watchmen", "Wonder Woman", "X-Men", "X-Men 2", "X-Men Origins: Wolverine", "X-Men: Apocalypse", "X-Men: Days of Future Past", 
    "X-Men: First Class", "X-Men: The Last Stand"
  ];
  
  return (
    <div className="app">

      {/* title */}
      <h1>MovieLand</h1>

      {/* creating search bar */}
     
      <div className='search'>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: '100%', outline: 'none' }}
      onChange={(event, value) => setSearchTerm(value)}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
        {/* <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          /> */}

      {/* image to search */} 
      <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)}/>
       

    </div>

    {
      movies?.length > 0
        ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie = {movie} />
            ) )}
      </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )

    }     
      </div>
  );
}

export default App;
