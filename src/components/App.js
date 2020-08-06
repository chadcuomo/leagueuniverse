import React from 'react';
import WelcomePage from './WelcomePage';
import MainPage from './MainPage';

import * as apiRoutes from '../API/api_routes';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allChamps: {},
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
    
  }

  render() {
    return (
      <div className="main-container">
        <WelcomePage />
        <MainPage />
      </div>
    );
  }
}

export default App;
