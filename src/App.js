import React,{useState} from 'react';
// import './App.css';
import Movieslist from './Movieslist';
// import Search from './Search';


function App() {
  // const [Keysearch,setKeysearch] = useState("")
  // const [newRate,setNewRate] = useState(1)
  const [movies,setMovies] = useState[
    {
     title:"mjflzek,zlk,n"
      // description :"After thirty years, Maverick is still pushing the envelope as a top naval aviator",
      //  img:"https://fr.web.img3.acsta.net/pictures/22/03/29/15/12/0827894.jpg",
      // rate : 5,
      // genre:"Action",
      // duration:"2h 11min"
    }]
    // {
    //   title :'Jurassic World Dominion' ,
    //   description :'Four years after the destruction of Isla Nublar, Biosyn operatives attempt to track down Maisie Lockwood',
    //   img:'https://m.media-amazon.com/images/M/MV5BOTBjMjA4NmYtN2RjMi00YWZlLTliYTktOTIwMmNkYjYxYmE1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
    //   rate : 3      ,
    //   genre:'Action, Aventure, Science fiction',
    //   duration:' 2h 26min'
    // },
    // {
    //   title :'Minions: The Rise of Gru',
    //   description :'The untold story of one twelve-year-olds dream to become the worlds greatest supervillain.',
    //   img :'https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2MzY1MjM1._V1_FMjpg_UX1000_.jpg',
    //   rate : 4,
    //   genre:'Animation, Action, Comédie, Famille',
    //   duration:'1h 28min'
    // },
    // {
    //   title :'The Batman',
    //   description :'When a sadistic serial killer begins murdering key political figures in Gotham',
    //   img :'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg',
    //   rate : 4,
    //   genre: 'Action, Policier, Thriller',
    //   duration:'2h 57min'
    // }
  // ]
  //  const search=(text)=>{
  //   setKeysearch(text)
  //  }

  // const setRate=(rate)=> {
  //   setNewRate(rate)
  // }
  return (
    <div className="App">
      {/* <Search search={search} setRate={setRate} newRate={newRate}/> */}
      {/* <Movieslist Movies={Movies.filter (el => el.rate>= newRate &&  el.title.toLocaleLowerCase().includes(Keysearch.toLocaleLowerCase().trim()))} />  */}
      <Movieslist />
      jnflgzeiknf!kln
    </div>
  );
}

export default App;
