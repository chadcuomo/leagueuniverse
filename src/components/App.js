import React from 'react';
import WelcomePage from './WelcomePage';
import MainPage from './MainPage';

class App extends React.Component {
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
