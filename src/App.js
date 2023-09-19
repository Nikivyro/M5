import React, { Component } from 'react'
import MyNav from "./components/navigation/MyNav";
import { navData } from './data/navData';
import MyFooter from './components/footer/MyFooter';
import Welcome from './components/welcome/Welcome';
import LatestRelease from './components/latestRelease/LatestRelease';
// import ReservationForm from './components/ReservationForm/ReservationForm';


export class App extends Component {
  render() {
    return (
      <>
      <MyNav links={navData}></MyNav>
      <Welcome></Welcome>
      {/* <ReservationForm/> */}
      <LatestRelease></LatestRelease>
      <MyFooter></MyFooter>
      </>
    )
  }
}

export default App