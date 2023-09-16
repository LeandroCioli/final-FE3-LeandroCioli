
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import { useGlobalContext } from "./Components/utils/global.context";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const{stateTheme} = useGlobalContext()
  
  /*const handleChangeTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };*/
  

  return (
      <div className={'App'} style={{background:stateTheme.background}}>
          
              <Router>
                <Navbar />
                <Routes>
                  <Route path='/' element={<Home/>}></Route>
                  <Route path='/home' element={<Home/>}></Route>
                  <Route path='/contact' element={<Contact/>}></Route>
                  <Route path='/favs' element={<Favs/>}></Route>
                  <Route path='/detail/:id' element={<Detail/>}></Route>
                </Routes>
              </Router>
              <Footer/>

      </div>
  );
}

export default App;
