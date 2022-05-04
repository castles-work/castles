import {Component} from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-tsparticles';
import particleOptions from '../particles/home.json';
import {particlesInit} from '../particles/particlesInit';

import Image1 from '../assets/images/castle6_1.webp';
import Image2 from '../assets/images/castle6_2.webp';
import Image3 from '../assets/images/castle6_3.webp';

export default class Castle extends Component {
  render() {
    return (
      <div className="app">
        <Particles init={particlesInit} options={particleOptions} />

        <div className="page">
          <div className="page-text">
            <b>Палац Четвертинських, Томашпільский район</b>
            <p>Палац Четвертинських - замок  XIX століття. Розташований у селищі Комаргород Томашпільского району.  </p>
            <div className="page-image"><img src={Image1} alt="палац" /></div>
            <p>Замок побудований в рідкісному для нашої місцевості архітектурному стилі - фахверк. Такий стиль характерний для північної Німеччини або Швейцарії. Побудований в цеглі, асиметричний в плані і обсягах. Первісне планування не збереглася. У другій половині XIX ст. будівля зазнала капітальної перебудови. Його фасади отримали стильового трактування в дусі швейцарських шале (архітектурні деталі в різьбленому дереві, фахверк декоративний). Оранжерея, що раніше примикала до головного фасаду, не збереглася. </p>
            <div className="page-image"><img src={Image2} alt="палац" /></div>
            <div className="page-image"><img src={Image3} alt="палац" /></div>
            <p>Селище Комаргород раніше належало родині князів Четвертинських і палац - це їх родинний замок. Поруч з палацом є парк, який займає площу більше 2,5 га. </p>
            <iframe title="Палац Четвертинських, Томашпільский район" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%D0%9F%D0%B0%D0%BB%D0%B0%D1%86%20%D0%A7%D0%B5%D1%82%D0%B2%D0%B5%D1%80%D1%82%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D1%85,%20%D0%90%D0%BD%D1%82%D0%BE%D0%BF%D1%96%D0%BB%D1%8C,%20%D0%92%D1%96%D0%BD%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B0%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,%2024249+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
            <p>Зараз це корпус Комаргородського аграрного ліцею</p>
          </div>
          <div className="parallax-btn-wrapper">
            <Link to="/" className="parallax-btn">На головну</Link>
          </div>
        </div>
      </div>
    );
  }
}