import React from 'react';

class Champion extends React.Component {
  render() {
    const { name } = this.props.details;
    const img = this.props.details.image.full;
    const imgsrc = `https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/${img}`;
    return (
      <div className="champion-container">
        <div className="champion-inner">
          <h3>{name}</h3>
          <img src={imgsrc} alt={name} className="round-img" />
        </div>
      </div>
    );
  }
}

export default Champion;
