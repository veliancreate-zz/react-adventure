import * as React from 'react';
import './HomePage.css';
import ChooseHeroContainer from '../chooseHero/ChooseHeroContainer';

class HomePage extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Heros</h2>
          <ChooseHeroContainer />
        </div>
      </div>
    );
  }
}

export default HomePage;
