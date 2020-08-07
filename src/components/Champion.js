import React from 'react';

class Champion extends React.Component {
  render() {
    const { name } = this.props.details;
    const img = `http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/${name}.png`;
    return (
      <div className="champion-container">
        <div className="champion-inner">
          <h3>{name}</h3>
          <img src={img} alt={name} />
          {console.log(this.props.details.image)}
        </div>
      </div>
    );
  }
}

export default Champion;
