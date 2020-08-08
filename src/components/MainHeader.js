import React from 'react';
import Searchbox from './Searchbox';

class MainHeader extends React.Component {
  render() {
    return (
      <div className="mainheader-container">
        <div className="mainheader-center-container">
          <div className="mainheader-text">
            <h2>League of Legends</h2>
            <h2>Universe</h2>
          </div>
          <div className="mainheader-search">
            <Searchbox searchChange={this.props.searchChange} />
            <div className="search-img-ctn">
              <img
                src="/images/search.png"
                className="search-img"
                alt="search"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainHeader;
