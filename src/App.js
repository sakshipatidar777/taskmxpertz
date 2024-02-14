import Navbar from './header/Navbar'
import Home from './component/Home'
import Landing from './component/Landing'
import About from './component/About'
import Gallery from './component/Gallery'
import People from './component/People'
import Blog from './component/Blog'
import Contact from './component/Contact'
// import MainFooter from './Footer/MainFooter'
import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <Landing/>
      <Home/>
      <About/>
      <Gallery/>
      <People/>
      <Blog/>
      <Contact/>
      {/* <MainFooter/> */}
    </>
  );
}

export default App;
