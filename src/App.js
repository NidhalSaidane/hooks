import React,{useState} from 'react';
import './App.css';
import Movieslist from './Movieslist';
import Search from './Search';
import Container from 'react-bootstrap/Container';
import {Nav,Form,Button} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import img from './Net.png'
import Trailer from './Trailer';
import { Route, Routes } from 'react-router-dom';
import {Link} from "react-router-dom"



function App() {
  const [Keysearch,setKeysearch] = useState("")
  const [newRate,setNewRate] = useState(1)
  const [movies,setMovies] = useState([
    {
      descriptions:'After more than thirty years of service as one of the Navy’s top aviators, Pete “Maverick” Mitchell (Tom Cruise) is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him. When he finds himself training a detachment of Top Gun graduates for a specialized mission the likes of which no living pilot has ever seen, Maverick encounters Lt. Bradley Bradshaw (Miles Teller), call sign: “Rooster,” the son of Maverick’s late friend and Radar Intercept Officer Lt. Nick Bradshaw, aka “Goose.” Facing an uncertain future and confronting the ghosts of his past, Maverick is drawn into a confrontation with his own deepest fears, culminating in a mission that demands the ultimate sacrifice from those who will be chosen to fly it.',
      id:1,
      title:"Maverick",
      description :"After thirty years, Maverick is still pushing the envelope as a top naval aviator",
      img:"https://fr.web.img3.acsta.net/pictures/22/03/29/15/12/0827894.jpg",
      rate : 5,
      genre:"Action",
      duration:"2h 11min",
      trailer:<iframe width="560" height="315" src="https://www.youtube.com/embed/giXco2jaZ_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      descriptions:'Jurassic World Dominion is a 2022 American science fiction action film directed by Colin Trevorrow, who co-wrote the screenplay with Emily Carmichael from a story by Derek Connolly and Trevorrow. The sequel to Jurassic World: Fallen Kingdom (2018), it is the third and final installment in the Jurassic World trilogy as well as the sixth installment in the Jurassic Park franchise, concluding the storyline of the original Jurassic Park trilogy. The film has an ensemble cast, including Chris Pratt, Bryce Dallas Howard, Laura Dern, Jeff Goldblum, Sam Neill, DeWanda Wise, Mamoudou Athie, BD Wong, and Omar Sy. Dern, Goldblum, and Neill reprise their roles from the Jurassic Park trilogy, appearing together for the first time since the 1993 film.',
      id:2,
      title :'Jurassic World Dominion' ,
      description :'Four years after the destruction of Isla Nublar, Biosyn operatives attempt to track down Maisie Lockwood',
      img:'https://m.media-amazon.com/images/M/MV5BOTBjMjA4NmYtN2RjMi00YWZlLTliYTktOTIwMmNkYjYxYmE1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
      rate : 3      ,
      genre:'Action, Aventure, Science fiction',
      duration:' 2h 26min',
      trailer:<iframe width="560" height="315" src="https://www.youtube.com/embed/fb5ELWi-ekk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      descriptions:'This summer, from the biggest global animated franchise in history, comes the origin story of how the world’s greatest supervillain first met his iconic Minions, forged cinema’s most despicable crew and faced off against the most unstoppable criminal force ever assembled in Minions: The Rise of Gru.',
      id:3,
      title :'Minions: The Rise of Gru',
      description :'The untold story of one twelve-year-olds dream to become the worlds greatest supervillain.',
      img :'https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2MzY1MjM1._V1_FMjpg_UX1000_.jpg',
      rate : 4,
      genre:'Animation, Action, Comédie, Famille',
      duration:'1h 28min',
      trailer:<iframe width="560" height="315" src="https://www.youtube.com/embed/6DxjJzmYsXo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      descriptions:"The Batman is a 2022 superhero film based on the DC Comics superhero of the same name. It focuses on the character's second year as the crime fighting vigilante, and released on March 4, 2022. It is the first film and second installment of The Batman Universe",
      id:4,
      title :'The Batman',
      description :'When a sadistic serial killer begins murdering key political figures in Gotham',
      img :'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg',
      rate : 4,
      genre: 'Action, Policier, Thriller',
      duration:'2h 57min',
      trailer:<iframe width="560" height="315" src="https://www.youtube.com/embed/mqqft2x_Aa4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    }
  ])
   const search=(text)=>{
    setKeysearch(text)
   }

  const setRate=(rate)=> {
    setNewRate(rate)
  }
  const addMovie=(movie)=>{
      setMovies(movies.concat(movie))
    
  }
  return (

    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#logo">
            <img
              src={img}
              width="70"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          
            <Nav className="me-auto" >
            
            <Link style={{textDecoration: 'none',color:'white',fontSize:'20px',fontFamily:'unset',marginRight:'10px'}} to="/"><li>Home</li></Link>
            <Link style={{textDecoration: 'none',color:'white',fontSize:'20px',fontFamily:'unset',marginRight:'10px'}}to="/series"><li>Series</li></Link>
            <Link style={{textDecoration: 'none',color:'white',fontSize:'20px',fontFamily:'unset',marginRight:'10px'}}to="/movie"><li>Movies</li></Link>
            <Link style={{textDecoration: 'none',color:'white',fontSize:'20px',fontFamily:'unset',marginRight:'10px'}}to="/aboutus"><li>About us</li></Link>
          </Nav>
          <Search search={search} setRate={setRate} newRate={newRate}/>
          
        </Container>
      </Navbar>


      <Routes>
      <Route path="/" element={<h1 style={{color: "orange",textAlign:"center",marginTop:"50px",fontSize:"60px"}}>Welcome to home page</h1>}/>
       <>
      <Route path="/movie" element={<Movieslist addMovie={addMovie} movies={movies.filter (el => el.rate>= newRate &&  el.title.toLowerCase().includes(Keysearch.toLowerCase().trim()))} /> }/>
      <Route path="/trailer/:id" element={<Trailer movies={movies} />}/>
      </>
      
      </Routes>
   
    </div>
  );
}

export default App;
