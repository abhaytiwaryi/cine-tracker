import React from 'react'
import Card from './Card'
import Watchlist from './Watchlist'

const dummyMovies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    poster: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    poster: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
  },
  {
    id: 4,
    title: "Kantara",
    year: 2022,
    poster: "https://upload.wikimedia.org/wikipedia/en/8/84/Kantara_poster.jpeg",
  },
  {
    id: 5,
    title: "Sardar Udham",
    year: 2021,
    poster: "https://upload.wikimedia.org/wikipedia/en/4/4e/Sardar_Udham_poster.jpg",
  },
  {
    id: 6,
    title: "3 Idiots",
    year: 2009,
    poster: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
  },
  {
    id: 7,
    title: "Dune: Part Two",
    year: 2024,
    poster: "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg",
  },
  {
    id: 8,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    poster: "https://upload.wikimedia.org/wikipedia/en/f/fa/Spider-Man_Into_the_Spider-Verse_poster.png",
  },
  {
    id: 9,
    title: "Oppenheimer",
    year: 2023,
    poster: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
  },
  {
    id: 10,
    title: "Avengers: Endgame",
    year: 2019,
    poster: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
];

const Content = () => {
  return (
    <div className='gap-5 p-5 flex flex-col'>
        <div>
            <h1 className='text-2xl'>Search Results</h1>
        </div>
        <div className='flex gap-3 overflow-x-auto scrollbar-none'>
            {dummyMovies.map((item) => (
                <Card key={item.id} movie={item}/>
            ))}
        </div>
        <div>
            <Watchlist />
        </div>
    </div>
  )
}

export default Content