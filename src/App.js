import {useState,useEffect} from 'react'
import './styles/App.scss'
import Header from './Components/Header'
import Navigation from './Pages/Navigation'
import Home from './Pages/Home'
import CaseStudies from './Pages/CaseStudies'
import Approach from './Pages/Approach'
import About from './Pages/About'
import Services from './Pages/Services'
import gsap from 'gsap'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {

  const [dimensions,setDimensions]=useState({
    width:window.innerWidth,
    height:window.innerHeight
  })

  const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/case", name: "caseStudies", Component: CaseStudies },
    { path: "/approach", name: "approach", Component: Approach },
    { path: "/services", name: "services", Component: Services },
    { path: "/about", name: "about", Component: About }
  ];

  const debounce=(callback, wait, immediate = false)=>{
    let timeout = null   
    return function() {
      const callNow = immediate && !timeout
      const next = () => callback.apply(this, arguments)
      
      clearTimeout(timeout)
      timeout = setTimeout(next, wait)
  
      if (callNow) {
        next()
      }
    }
  }
  const handleWidth = debounce((event) => {
    setDimensions({
      width:event.target.innerWidth,
      height:event.target.innerHeight
    })
  }, 1000, true)
  
  useEffect(()=>{
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
    window.addEventListener('resize',e=>{
      handleWidth(e)
    })
  },[])
  return (
    <div className="App">
      <Router>
        <Header dimensions={dimensions}/>
        <div className="MainContent">
        {
          routes.map(({Component,path})=> 
            <Route key={path} path={path} exact>
              <Component />
            </Route>
            )
        }
        </div>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
