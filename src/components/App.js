import React from 'react';
import MainPage from './MainPage';
import * as apiRoutes from '../API/api_routes';
import ChampionCard from './ChampionCard';
import { gsap } from 'gsap';

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
    document.cookie = 'cookie2=value2; SameSite=None; Secure';
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  getChampName = async (key) => {
    let singleChamp = { ...this.state.singleChamp };
    const resp = await fetch(`http://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion/${key}.json`);
    const champ = await resp.json();
    singleChamp = champ.data;
    this.setState({ singleChamp });
    gsap.to('.mainpage-container', {
      duration: 1.25,
      y: -1200,
      
    });
    gsap.from('.championcard-container', {
      duration: 1,
      y: 1000,
    })
  }

  goHome = (key) => {
    let singleChamp = { ...this.state.singleChamp };
    delete singleChamp[key];
    gsap.to('.mainpage-container', {
      duration: 1,
      y: 0,
      
    });
    gsap.to('.championcard-container', {
      duration: 1,
      y: 1000,
    })
    this.setState({ singleChamp })
  }


  render() {

    return (
      <div className="main-container">
        <MainPage 
        allChamps={this.state.allChamps} 
        searchChange={this.onSearchChange}
        searchfield={this.state.searchfield}
        getChampName={this.getChampName}
        />
        {Object.keys(this.state.singleChamp).map(key =>
          <ChampionCard
            key={key}
            index={key}
            details={this.state.singleChamp[key]}
            goHome={this.goHome}
          />
        )}
      </div>
    );
  }
}

export default App;
