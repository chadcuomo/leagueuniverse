import React from 'react';

class ChampionBio extends React.Component {
  render() {
    return (
      <div className="championbio-container">
        <div className="left-button">^</div>
        <div className="bio-container">
          <div className="bio-box">
            <p className="bio-paragraph">
              Once honored defenders of Shurima against the Void, Aatrox and his
              brethren would eventually become an even greater threat to
              Runeterra, and were defeated only by cunning mortal sorcery. But
              after centuries of imprisonment, Aatrox was the first to find
              freedom once more, corrupting and transforming those foolish
              enough to try and wield the magical weapon that contained his
              essence. Now, with stolen flesh, he walks Runeterra in a brutal
              approximation of his previous form, seeking an apocalyptic and
              long overdue vengeance.
            </p>
          </div>
        </div>
        <div className="right-button">^</div>
      </div>
    );
  }
}

export default ChampionBio;
