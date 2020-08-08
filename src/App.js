import React from 'react';
import { Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './components/home/index'
import AboutMe from './components/about/AboutMe'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'



function App() {
  return (
    <>
    <CssBaseline />
    <Route exact path='/' component={Home} />
    <Route path='/about-me' component={AboutMe} />
    <Route path='/projects' component={Projects} />
    <Route path='/contact' component={Contact} />
    </>
  );
}

export default App;


