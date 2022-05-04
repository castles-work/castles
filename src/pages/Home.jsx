import {Component} from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-tsparticles';

import particleOptions from '../particles/home.json';
import {particlesInit} from '../particles/particlesInit';
import {castlesList} from '../castlesList';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import '../assets/css/Page.scss';
import '../assets/css/Home.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
  }

  onInputChange(event) {
    const searchInput = event.target.value;
    this.setState({searchInput});
  }

  render() {
    const {searchInput} = this.state;
    const castles = castlesList.filter(castle => castle.title.toLowerCase().includes(searchInput.toLowerCase()));
    return (
      <>
        <Particles init={particlesInit} options={particleOptions} />

        <div className="page">
          <div className="home-welcome">
            <strong>Вас вітає Castles!</strong>
            <p>Вінницька область є лідером за кількістю історичних пам'яток, а саме замків, садиб, палаців, фортець і маєтків. Їй поступаються навіть Львівська і Тернопільська області, де, здається, в кожному селищі і місті є щось примітне.</p>
            <p className="subtitle">Ми розповімо вам про них і поринемось у їхню історію!</p>
          </div>
          <div className="search">
            <input type="search" className="search-input" placeholder="Шукати.." onChange={this.onInputChange.bind(this)} />
            <button type="submit" className="search-button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className="castles-container">
            {castles.map(page => {
              return <div key={page.url} className="castle-card">
                <Link to={page.url}>
                  <div className="castle-preview">
                    <img src={page.preview} alt={page.title} />
                  </div>
                  <div className="castle-title">{page.title}</div>
                </Link>
              </div>
            })}
          </div>
        </div>
      </>
    );
  }
}