import React from 'react';
import WelcomePage from './WelcomePage';
import MainPage from './MainPage';
import * as apiRoutes from '../API/api_routes';
import ChampionCard from './ChampionCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allChamps: {},
      searchfield: ''
    };
  }

  fetchChamps = async (champData) => {
    let allChamps = { ...this.state.allChamps };
    const resp = await fetch(apiRoutes.reqestAllChampions);
    const champs = await resp.json();
    allChamps = champs.data
    this.setState({ allChamps })
    
   }

  componentDidMount() {
    this.fetchChamps()
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      console.log(vh);
    });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    
  };

  render() {

    

    return (
      <div className="main-container">
        <WelcomePage />
        <MainPage 
        allChamps={this.state.allChamps} 
        searchChange={this.onSearchChange}
        searchfield={this.state.searchfield}
        />
        <ChampionCard />
      </div>
    );
  }
}

export default App;
