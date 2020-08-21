import React from 'react';
import MainHeader from './MainHeader';
import MainContent from './MainContent';

class MainPage extends React.Component {
  render() {
    return (
      <div className="mainpage-container">
        <MainHeader searchChange={this.props.searchChange} />
        <MainContent
          allChamps={this.props.allChamps}
          searchfield={this.props.searchfield}
          getChampName={this.props.getChampName}
        />
      </div>
    );
  }
}

export default MainPage;
