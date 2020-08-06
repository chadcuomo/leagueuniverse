import React from 'react';
import MainHeader from './MainHeader';
import MainContent from './MainContent';

class MainPage extends React.Component {
  render() {
    return (
      <div className="mainpage-container">
        <MainHeader />
        <MainContent />
      </div>
    );
  }
}

export default MainPage;
