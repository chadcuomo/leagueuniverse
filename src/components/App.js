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
      searchfield: '',
      singleChamp: {}
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

  getChampName = async (key) => {
    let singleChamp = { ...this.state.singleChamp };
    const resp = await fetch(`http://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion/${key}.json`);
    const champ = await resp.json();
    singleChamp = champ.data
    this.setState({ singleChamp })
    console.log(singleChamp)    
  }

  render() {

    

    return (
      <div className="main-container">
        <WelcomePage />
        <MainPage 
        allChamps={this.state.allChamps} 
        searchChange={this.onSearchChange}
        searchfield={this.state.searchfield}
        getChampName={this.getChampName}
        />
        <ChampionCard />
      </div>
    );
  }
}

export default App;
