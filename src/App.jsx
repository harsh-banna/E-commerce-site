import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import {Provider} from "react-redux";
import appStore from './utils/appStore';
import { Outlet } from 'react-router-dom' ;
import Footer from './components/Footer';

function App() {

  return (
    <Provider store={appStore}>
    <>
      <h1>ShoppyGlobe🌐</h1>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
    </Provider>
  )
}

export default App;
