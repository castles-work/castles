import {Component} from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-tsparticles';
import particleOptions from '../particles/home.json';
import {particlesInit} from '../particles/particlesInit';

import Image1 from '../assets/images/castle12_1.webp';
import Image2 from '../assets/images/castle12_2.webp';
import Image3 from '../assets/images/castle12_3.webp';
import Image4 from '../assets/images/castle12_4.webp';
import Image5 from '../assets/images/castle12_5.webp';
import Image6 from '../assets/images/castle12_6.webp';

export default class Castle extends Component {
  render() {
    return (
      <div className="app">
        <Particles init={particlesInit} options={particleOptions} />

        <div className="page">
          <div className="page-text">
            <b>Черленківський замок, Тиврівський район</b>
            <p>Черленківський замок - фортеця, що існувала в XVI-XVIII століттях, розташована поруч з селом Селище, Вінницької області.</p>
            <div className="page-image"><img src={Image1} alt="палац" /></div>
            <p>Кам’яний замок в Старому Черленкові збудував в середині XVII століття хтось з шляхтичів Черленковських – власників містечка.</p>
            <div className="page-image"><img src={Image2} alt="палац" /></div>
            <p>Зараз від повноцінного замку залишились лише руїни двох веж, які розташовані на високій терасі над меандрами річки. Збереглися і залишки замкових фундаментів, а також підземні ходи із скарбами, які, за переказами, вели аж до Вінниці.</p>
            <div className="page-collage">
              <img src={Image3} alt="палац" />
              <img src={Image4} alt="палац" />
            </div>
            <p>Найкраще збереглася двоярусна шестигранна вежа з отшкутатуреним фасадом і рустованими кутами. З початку 1800-х років вона була перетворена на родинний склеп Щеньовських. Її прикрашав купол зі шпилем, а про колишній оборонних характер вежі нагадували амбразури у нижньому ярусі. Цинкові труни у склепі, як у казці, висіли на ланцюгах. Всі поховання знищили більшовицькі окупанти після революції, труни були викинуті з башти.</p>
            <div className="page-collage">
              <img src={Image5} alt="палац" />
              <img src={Image6} alt="палац" />
            </div>
            <iframe title="Черленківський замок, Тиврівський район" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%D0%A7%D0%B5%D1%80%D0%BB%D0%B5%D0%BD%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%20%D0%B7%D0%B0%D0%BC%D0%BE%D0%BA,%20%D0%A2%D0%B8%D0%B2%D1%80%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
            <p>Зараз це руїна історичної оборонної споруди. Пам'ятка архітектури і містобудування місцевого значення, включена до відповідного Реєстру пам'яток історії та культури Вінницької області. Декілька років тому за «відбудову» Черленківського замку взявся колишній посадовець, який планує розмістити у стилізованих під замок будівлях готель з рестораном та музеєм.</p>
          </div>
          <div className="parallax-btn-wrapper">
            <Link to="/" className="parallax-btn">На головну</Link>
          </div>
        </div>
      </div>
    );
  }
}