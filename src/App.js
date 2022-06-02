import Navigation from './components/Navigation'
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import { Container } from 'react-bootstrap';
import CardDetails from './pages/CardDetails';
import CardsInfo from './pages/CardsInfo';
import AllCards from './pages/AllCards';
import RandomCard from './pages/RandomCard';
import CardSet from './pages/CardSet';
import CardsInSet from './components/CardsInSet';
const linksForNavbar = [
  {
    path: "/about",
    text: "About",
    type: "link"
  },
  {
    path: "/cards",
    text: "Cards",
    type: "dropdown",
    dropdownLinks: [
      {
        path: "",
        text: "Cards Central"
      },
      {
        path: "/all",
        text: "All Cards"
      },
      {
        path: "/random",
        text: "Random Card"
      }
    ]
  }
]


function App() {
  

  return (
    <Container>
      <Navigation
        title={"Catch 'em All"}
        links={linksForNavbar}
      />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="cards/*" element={<Outlet/>}>
          <Route path="" element={<CardsInfo />} />
          <Route path="all" element={<AllCards />} />
          <Route path="random" element={<RandomCard />} />
          <Route path=":cardId" element={<CardDetails />} />
          <Route path="sets/*" element={<CardSet />}>
            <Route path=":setId/*" element={<CardsInSet />} />
          </Route>
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
