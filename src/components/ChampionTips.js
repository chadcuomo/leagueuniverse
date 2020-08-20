import React from 'react';

class ChampionTips extends React.Component {
  render() {
    return (
      <div className="info-box">
        <h4 className="info-h4">Ally Tips</h4>
        <p className="info-paragraph">
          "Use Umbral Dash while casting The Darkin Blade to increase your
          chances of hitting the enemy.", "Crowd Control abilities like Infernal
          Chains or your allies' immobilizing effects will help you set up The
          Darkin Blade.", "Cast World Ender when you are sure you can force a
          fight."
        </p>
        <h4 className="info-h4">Enemy Tips</h4>
        <p className="info-paragraph">
          Aatrox's attacks are very telegraphed, so use the time to dodge the
          hit zones.", "Aatrox's Infernal Chains are easier to exit when running
          towards the sides or at Aatrox.", "Keep your distance when Aatrox uses
          his Ultimate to prevent him from reviving."
        </p>
      </div>
    );
  }
}

export default ChampionTips;
